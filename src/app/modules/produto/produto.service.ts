import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { RestService } from '../core/rest.service';
import { AppController } from '../core/appController';
import { map } from 'rxjs/operators';

@Injectable()
export class ProdutoService {
    
    constructor(private appController: AppController,
    private restService: RestService) { }

    public obterTodos(): Observable<any> {
        return this.restService.post(`produto/obterTodos`, null);
    }

    public obterPorId(pId): Promise<any> {
        return new Promise((resolve, reject) => {
            this.restService
            .post(`produto/obterPorId?` + this.appController.criarParamsEndpoint(['pId'],[pId]), null)
            .pipe(map(resp => resp)).subscribe(resp => {
                resolve(resp);
            }), (err) => {
                console.log('erro requisição: ', err);
                reject(err);
            }
        });
    }
}