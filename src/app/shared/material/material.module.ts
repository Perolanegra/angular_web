import 
{ 
    MatButtonModule, MatCheckboxModule, MatTableModule, MatInputModule, MatDialogModule, MatSidenavModule, 
    MatIconModule, MatProgressSpinnerModule, MatSortModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule,
    MatChipsModule, MatDividerModule, MatTreeModule, MatProgressBarModule, MatMenuModule, MatListModule, 
    MAT_DIALOG_DEFAULT_OPTIONS, MatDialogRef, MAT_DIALOG_DATA, MAT_DATE_LOCALE, MAT_CHIPS_DEFAULT_OPTIONS, 
    MAT_DATE_FORMATS, DateAdapter
} from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CdkTreeModule } from '@angular/cdk/tree';
import { CommonModule } from '@angular/common';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

export const MY_FORMATS = {
    parse: {
        dateInput: 'DD/MM/YYYY'
    },
    display: {
        dateInput: 'DD/MM/YYYY',
        monthYearLabel: 'MM YYYY',
        dateA11yLabel: 'DD/MM/YYYY'
    }
};

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule, 
        MatCheckboxModule,
        MatTableModule,
        MatInputModule,
        MatDialogModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSortModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatChipsModule,
        MatDividerModule,
        CdkTreeModule,
        MatTreeModule,
        MatProgressBarModule,
        MatMenuModule,
        MatListModule
    ],
    exports: [
        CommonModule,
        MatButtonModule, 
        MatCheckboxModule,
        MatTableModule,
        MatInputModule,
        MatDialogModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSortModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatChipsModule,
        MatDividerModule,
        CdkTreeModule,
        MatTreeModule,
        MatProgressBarModule,
        MatMenuModule,
        MatListModule
    ],
    providers: [
        {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: {}},
        {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
        {provide: MAT_CHIPS_DEFAULT_OPTIONS, useValue: {separatorKeyCodes: [ENTER,COMMA]}},
        {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
        {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]}
    ]
})
export class MaterialModule { }
