import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AppController } from './appController';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

    constructor(private appController: AppController) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const dialogAguarde = this.appController.openDialogAguarde();
        const token = ''; // implementar getAcessToken

        if(token) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        }

        if(!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if(event instanceof HttpResponse) {
                    console.log('Interceptor diz é HttpResponse: ', event);
                    dialogAguarde.close();
                }
                return event;
            }),
            catchError((err: HttpErrorResponse) => {
                dialogAguarde.close();
                const data = {
                    reason: err && err.error.reason ? err.error.reason : '',
                    status: err.status
                };

                console.log('Interceptor diz: Requisição em Exception');
                this.appController.tratarErro(err);
                return throwError(err);
            })
        );
    }

}