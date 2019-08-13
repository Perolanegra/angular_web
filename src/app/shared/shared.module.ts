import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    declarations: [
        // componentes de filtro, tabelas, trees, Rodapés...
    ],
    exports: [ // tudo que será usado na aplicação.
        CommonModule,
        RouterModule
    ],
    providers: []
})
export class SharedModule { }
