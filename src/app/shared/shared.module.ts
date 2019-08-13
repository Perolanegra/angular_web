import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { AppMaskDirective } from './directives/appMask.directive';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    declarations: [ // componentes de filtro, tabelas, trees, Rodapés, diretivas...
        AppMaskDirective        
    ],
    exports: [ // tudo que será usado na aplicação.
        CommonModule,
        MaterialModule,
        RouterModule,
        AppMaskDirective
    ],
    providers: []
})
export class SharedModule { }
