"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.DialogOverviewExampleDialog = exports.SmsSendComponent = void 0;
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var dialog_1 = require("@angular/material/dialog");
var SmsSendComponent = /** @class */ (function () {
    function SmsSendComponent(dialog, twilioSendSmsService) {
        this.dialog = dialog;
        this.twilioSendSmsService = twilioSendSmsService;
        this.clickMessage = '';
    }
    SmsSendComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '250px',
            data: { phone: this.phone }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.phone = result;
            _this.phone.concat('+1');
            _this.twilioSendSmsService.sendSms(_this.phone, _this.urlPath);
            _this.clickMessage = "Message Sent!";
        });
    };
    __decorate([
        core_1.Input()
    ], SmsSendComponent.prototype, "urlPath");
    SmsSendComponent = __decorate([
        core_1.Component({
            selector: 'app-sms-send',
            template: "\n    <button mat-button color=\"primary\" (click)=\"openDialog()\"><mat-icon>share</mat-icon> SMS</button>\n    {{clickMessage}}"
        })
    ], SmsSendComponent);
    return SmsSendComponent;
}());
exports.SmsSendComponent = SmsSendComponent;
var DialogOverviewExampleDialog = /** @class */ (function () {
    function DialogOverviewExampleDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogOverviewExampleDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogOverviewExampleDialog = __decorate([
        core_1.Component({
            selector: 'app-dialog-body',
            templateUrl: 'dialog-body.html'
        }),
        __param(1, core_2.Inject(dialog_1.MAT_DIALOG_DATA))
    ], DialogOverviewExampleDialog);
    return DialogOverviewExampleDialog;
}());
exports.DialogOverviewExampleDialog = DialogOverviewExampleDialog;
