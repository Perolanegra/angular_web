import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

export abstract class TelaPadrao {

    private _respResolver;
    public maskConfig = {
        mask: [
        new RegExp('\\d'),
        new RegExp('\\d'),
        '/',
        new RegExp('\\d'),
        new RegExp('\\d'),
        '/',
        new RegExp('\\d'),
        new RegExp('\\d'),
        new RegExp('\\d'),
        new RegExp('\\d')
        ],
        showMask: false,
        guide: false,
        placeholderChar: '_'
    };

    constructor(protected route: ActivatedRoute) {
        this.route.data.subscribe(resp => {
            this._respResolver = resp;
        });
    }

    /**
     * Getter que obtém a resposta do resolver invocado.
     */
    public get respResolver() {
        return this._respResolver;
    }

    /**
     * Retorna um JSON de parâmetros criados a partir do formulário passado.
     * @param pForm Recebe o formulário como parâmetro.
     * @author igor.alves
     */
    criarParamsFiltro(pForm: FormGroup) {
        const controls = Object.keys(pForm.controls);
        let params = {};

        controls.forEach(control => {
            params[control] = pForm.controls[control].value ? pForm.controls[control].value : null;
        });

        return params;
    }
}