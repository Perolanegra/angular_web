import { NgModule } from "@angular/core";
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
// import { ProdutoService } from './produto.service';
import { ProdutoComponent } from './produto.component';

@NgModule({
    declarations: [
        ProdutoComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
    providers: [
        // ProdutoService
    ]
})
export class ProdutoModule { }