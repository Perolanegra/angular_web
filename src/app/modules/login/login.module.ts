import { NgModule } from "@angular/core";
import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AutenticacaoService } from './autenticacao.service';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
    providers: [
        AutenticacaoService
    ]
})
export class LoginModule { }