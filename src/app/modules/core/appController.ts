import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AbstractControl } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material';
import { DialogAguardeComponent } from 'src/app/shared/dialogs/dialogAguarde/dialogAguarde.component';
import { DialogConfirmacaoComponent } from 'src/app/shared/dialogs/dialogConfirmacao/dialogConfirmacao.component';
import { Router } from '@angular/router';
import { debounceTime, tap } from 'rxjs/operators';

@Injectable()
export class AppController {
    private msg = '';

    constructor(private dialog: MatDialog, private router: Router, private toastr: ToastrService) { }

    tratarErro(err): void {
        // Mensagem a ser exibida
        this.msg = err.message;

        // Erros de Response(possuem status)
        if (err.status !== undefined && err.status != null) {
            // tslint:disable-next-line: triple-equals
            if (err.status == 401) {
                const errJson = err.json();

                if (errJson.error === 'invalid_token') {
                    // this.openDialogSessaoExpirada();
                    this.msg = 'Sua sessão expirou, favor realizar o login novamente.';

                } else {
                    // Token expirado
                    this.msg = 'Acesso não autorizado, verifique seu login ou procure o suporte técnico.';
                }
            } else {
                if (err.status === 500) {
                    this.msg = 'Um problema não esperado ocorreu durante a execução do serviço. Por favor, tente novamente mais tarde.';
                } else {
                    if (err.status === 404) {
                        this.msg = 'O serviço solicitado encontra-se indisponível no momento. Por favor, tente novamente mais tarde.';
                    } else {
                        if (err.status === 0) {
                            // tslint:disable-next-line: max-line-length
                            this.msg = 'Foi impossível conectar com o servidor. Verifique sua conexão com a internet ou tente novamente mais tarde.';
                        } else {
                            if (err.status === 400 && err.error && err.error.error == 'invalid_grant') {
                                // tslint:disable-next-line: max-line-length
                                this.msg = 'Usuário ou senha não reconhecidos. Verifique os dados informados e o acionamento da tecla CAPSLOCK.';
                            } else {
                                if (err.json !== undefined) {
                                    const errJson = err.json();
                                    this.msg = errJson.message || errJson.error_deion;
                                }
                            }
                        }
                    }
                }
            }

        }

        this.exibirErro(this.msg);
    }

    public exibirErro(msg: string) {
        setTimeout(() => this.toastr.error(msg, ''));
    }

    public exibirSucesso(msg: string) {
        setTimeout(() => this.toastr.success(msg, ''));
    }

    public exibirWarning(msg: string) {
        setTimeout(() => this.toastr.warning(msg, ''));
    }

    public exibirInformacao(msg: string) {
        setTimeout(() => this.toastr.info(msg, ''));
    }

    /**
     * Retorna o array ordenado.
     * @param records Array que será ordenado.
     * @param atributos Atributo(s) em que a ordenação será realizada.
     * @param direction Crescente ou decrescente. Ex: "asc", "desc".
     */
    public orderBy(records: Array<any>, atributos: string[], direction: string): any {
        let directions;
        if (direction === 'asc') {
            directions = [1];
        } else {
            if (direction === 'desc') {
                directions = [-1];
            }
        }
        return records.sort((a, b) => {
            for (let i = 0; i < atributos.length; i++) {
                if (a[atributos[i]] < b[atributos[i]]) {
                    return -1 * directions[i]
                } else if (a[atributos[i]] > b[atributos[i]]) {
                    return 1 * directions[i];
                }
            }
            return 0;
        });
    }

    /**
     * Trata o Autocomplete
     * @param pFormControl Parâmetro que será observado obtendo os valores quando houver modificação.
     * @param pFuncaoTratamento Função responsável por obter os registros de um Autocomplete
     * @param pTamanhoMinimo Quantidade mínima de caractere digitado para efetuar a requisição, Default: 3.
     */
    public tratarAutocomplete(pFormControl: AbstractControl, pFuncaoTratamento, pTamanhoMinimo: number = 3) {
        pFormControl.valueChanges
        .pipe(
            debounceTime(500),
            tap(async pValue => {
                if (pValue && pValue.length >= pTamanhoMinimo && pValue != null) {
                    const lDialog = this.openDialogAguarde();
                    try {
                        await pFuncaoTratamento(pValue);
                    } catch (err) {
                        this.tratarErro(err);
                    } finally {
                        lDialog.close();
                    }
                }
            })
        ).subscribe();
    }

    public openDialogAguarde(): MatDialogRef<DialogAguardeComponent> {
        const dialogRef = this.dialog.open(DialogAguardeComponent, {
            width: '250px',
            data: { msg: '' }
        });

        return dialogRef;
    }

    public openDialogConfirmacao(pMsg): MatDialogRef<DialogConfirmacaoComponent> {
        const dialogRef = this.dialog.open(DialogConfirmacaoComponent, {
            width: '250px',
            data: { msg: pMsg },
            autoFocus: true
        });

        return dialogRef;
    }

    /**
     * Retorna para uma nova rota de navegação.
     * @param pPage Recebe uma string como parâmetro que faz referência a rota a ser navegada.
     * @author igor.alves
     */
    public async navigate(pPage: string) {
        const dialogAguarde = this.openDialogAguarde();
        try {
            await this.router.navigate(['/' + pPage]).catch(err => {
                this.tratarErro(err);
            });
        } finally {
            dialogAguarde.close();
        }
    }

    /**
     * Retorna a nova String sem os parâmetros de caracteres passados.
     * @param pStr String que deseja ser alterada.
     * @param pArray Array de caracteres que deseja retirar da String passada.
     * @author igor.silva
     */
     public removeCpfFormat(pStr: string, pArray: Array<any>) {
        let lStr = pStr;
        let lReplace;
        let lReg;

        pArray.forEach(item => {
            if(pStr !== undefined && pStr !== null) {
                lReplace = item;
                if (item === '.') {
                    lReplace = /\./;
                }

                lReg = new RegExp(lReplace, "g");
                lStr = lStr.replace(lReg,'');
            }
        });

        return lStr;
    }

    downloadArquivo(pNome: string, pMimeType: string, pResp: any) {
        const lDialog = this.openDialogAguarde();
        try {
            const blob = new Blob([pResp], { type: pMimeType });
            const nomeArquivo = pNome;

            if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                window.navigator.msSaveOrOpenBlob(blob, nomeArquivo);
            } else {
                const a = document.createElement('a');
                a.href = URL.createObjectURL(blob);
                a.download = nomeArquivo;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            }
        } catch (err) {
            this.tratarErro(err);
        } finally {
            lDialog.close();
        }
    }

    /**
     * Retorna um objeto com as propriedades de ano, mês e dia da Data passada.
     * @param pDataBr String da data em formato br. Exemplo: 07/08/2019 ou 07-08-2019.
     * @author igor.alves
     */
     obterAnoMesDia(pDataBr: string): object {
        const lObjRetorno: any = {
            dia: new String(),
            mes: new String(), 
            ano: new String()
        };

        for (let i = 0; i < pDataBr.length; i++) {
            if(i < 2) {
                lObjRetorno.dia += pDataBr.charAt(i);
            } else if(i > 2 && i < 5) {
                    lObjRetorno.mes += pDataBr.charAt(i);
            } else if(i > 5 && i < 10) {
                    lObjRetorno.ano += pDataBr.charAt(i);
            }
        }

        return lObjRetorno;
    }

    criarParamsEndpoint(pNomes: string[], pValores: any[]): string {
        let lRetorno = '';
        for (let i = 0; i < pNomes.length; i++) {
          if (pValores[i] !== undefined && pValores[i] != null) {
            if (i > 0) {
              lRetorno += '&';
            }
            lRetorno += pNomes[i] + '=' + encodeURIComponent(pValores[i]);
          }
        }

        return lRetorno;
    }

}