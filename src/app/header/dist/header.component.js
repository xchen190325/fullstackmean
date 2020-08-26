"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HeadersComponent = void 0;
var core_1 = require("@angular/core");
var HeadersComponent = /** @class */ (function () {
    function HeadersComponent(authService) {
        this.authService = authService;
        this.isAuthenticated = false;
    }
    HeadersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userSub = this.authService.user.subscribe(function (user) {
            _this.isAuthenticated = !!user;
            console.log(!user);
            console.log(!!user);
        });
    };
    HeadersComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    HeadersComponent.prototype.ngOnDestroy = function () {
        this.userSub.unsubscribe();
    };
    HeadersComponent = __decorate([
        core_1.Component({
            selector: 'app-headers',
            templateUrl: './header.component.html'
        })
    ], HeadersComponent);
    return HeadersComponent;
}());
exports.HeadersComponent = HeadersComponent;
