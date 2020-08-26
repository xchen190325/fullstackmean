"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppNewsComponent = void 0;
var core_1 = require("@angular/core");
var AppNewsComponent = /** @class */ (function () {
    function AppNewsComponent(newsapi, authService, route) {
        this.newsapi = newsapi;
        this.authService = authService;
        this.route = route;
        this.isAuthenticated = false;
        this.willComment = false;
        console.log('app component constructor called');
    }
    AppNewsComponent.prototype.printcon = function () {
        console.log('hello world');
    };
    AppNewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //load articles
        this.newsapi.initArticles().subscribe(function (data) { return _this.mArticles = data['articles']; });
        //load news sources
        this.newsapi.initSources().subscribe(function (data) { return _this.mSources = data['sources']; });
        this.userSub = this.authService.user.subscribe(function (user) {
            _this.isAuthenticated = !!user;
            console.log(!user);
            console.log(!!user);
        });
    };
    AppNewsComponent.prototype.onComment = function () {
        if (this.willComment) {
            this.willComment = false;
        }
        else {
            this.willComment = true;
        }
        console.log(this.willComment);
    };
    ;
    AppNewsComponent.prototype.onLogin = function () {
        this.route.navigate(['auth']);
    };
    AppNewsComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    AppNewsComponent.prototype.ngOnDestroy = function () {
        this.userSub.unsubscribe();
    };
    AppNewsComponent.prototype.searchArticles = function (source) {
        var _this = this;
        console.log("selected source is: " + source);
        this.newsapi.getArticlesByID(source).subscribe(function (data) { return _this.mArticles = data['articles']; });
    };
    AppNewsComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './news.component.html',
            styleUrls: ['./news.component.css']
        })
    ], AppNewsComponent);
    return AppNewsComponent;
}());
exports.AppNewsComponent = AppNewsComponent;
