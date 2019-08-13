import { Component, Inject, Injectable } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-aguarde',
  templateUrl: './dialogAguarde.component.html',
  styleUrls: ['./dialogAguarde.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class DialogAguardeComponent {

  constructor(public dialogRef: MatDialogRef<DialogAguardeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string[]) { }

    close(): void {
      this.dialogRef.close();
    }
}