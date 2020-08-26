import {Component, Input} from '@angular/core';
import { TwilioSendSmsService } from "./sms-send.service";
import { Inject } from "@angular/core";
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-sms-send',
  template: `
    <button mat-button color="primary" (click)="openDialog()"><mat-icon>share</mat-icon> SMS</button>
    {{clickMessage}}`
})


export class SmsSendComponent {
  clickMessage = '';
  phone: string;
  @Input() urlPath: string;

  constructor(public dialog: MatDialog, public twilioSendSmsService: TwilioSendSmsService) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {phone: this.phone}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.phone = result;
      this.phone.concat('+1');
      this.twilioSendSmsService.sendSms(this.phone, this.urlPath);
      this.clickMessage = "Message Sent!";
    });

  }

}

@Component({
  selector: 'app-dialog-body',
  templateUrl: 'dialog-body.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
