"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CommentListComponent = void 0;
var core_1 = require("@angular/core");
var CommentListComponent = /** @class */ (function () {
    function CommentListComponent() {
        this.panelOpenState = false;
    }
    CommentListComponent.prototype.ngOnInit = function () {
    };
    CommentListComponent = __decorate([
        core_1.Component({
            selector: 'app-comment-list',
            templateUrl: './comment-list.component.html',
            styleUrls: ['./comment-list.component.css']
        })
    ], CommentListComponent);
    return CommentListComponent;
}());
exports.CommentListComponent = CommentListComponent;
