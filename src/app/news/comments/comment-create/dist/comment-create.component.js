"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CommentCreateComponent = void 0;
var core_1 = require("@angular/core");
var CommentCreateComponent = /** @class */ (function () {
    function CommentCreateComponent() {
        this.newPost = '';
    }
    CommentCreateComponent.prototype.onAddPost = function (input) {
        this.newPost = 'input,hello world';
    };
    CommentCreateComponent.prototype.ngOnInit = function () {
    };
    CommentCreateComponent = __decorate([
        core_1.Component({
            selector: 'app-comment-create',
            templateUrl: './comment-create.component.html',
            styleUrls: ['./comment-create.component.css']
        })
    ], CommentCreateComponent);
    return CommentCreateComponent;
}());
exports.CommentCreateComponent = CommentCreateComponent;
