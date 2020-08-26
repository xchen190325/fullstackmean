"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_component_1 = require("./auth/auth.component");
var news_component_1 = require("./news/news.component");
var comment_create_component_1 = require("./news/comments/comment-create/comment-create.component");
var sms_send_component_1 = require("./sms-send/sms-send.component");
var appRoutes = [
    { path: '', component: auth_component_1.AuthComponent },
    { path: 'auth', component: auth_component_1.AuthComponent },
    { path: 'news', component: news_component_1.AppNewsComponent },
    { path: 'login', component: auth_component_1.AuthComponent },
    { path: 'post', component: comment_create_component_1.CommentCreateComponent },
    { path: 'sms', component: sms_send_component_1.SmsSendComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(appRoutes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
