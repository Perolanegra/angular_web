import { Component, Inject, Injectable } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'dialog-confirmacao-modal',
  templateUrl: './dialogConfirmacao.component.html',
  styleUrls: ['./dialogConfirmacao.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class DialogConfirmacaoComponent {

    constructor(public dialogRef: MatDialogRef<DialogConfirmacaoComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}
  
    cancel(): void {
        this.dialogRef.close();
    }
    
    confirm(pConfirmParam): void {
        this.dialogRef.close(pConfirmParam);
    }
  
}