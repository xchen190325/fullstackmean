"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var app_component_1 = require("./app.component");
var header_component_1 = require("./header/header.component");
var dropdown_directive_1 = require("./shared/dropdown.directive");
var app_routing_module_1 = require("./app-routing.module");
var auth_component_1 = require("./auth/auth.component");
var loading_spinner_component_1 = require("./shared/loading-spinner/loading-spinner.component");
var news_component_1 = require("./news/news.component");
var animations_1 = require("@angular/platform-browser/animations");
var slider_1 = require("@angular/material/slider");
var card_1 = require("@angular/material/card");
var icon_1 = require("@angular/material/icon");
var menu_1 = require("@angular/material/menu");
var sidenav_1 = require("@angular/material/sidenav");
var list_1 = require("@angular/material/list");
var toolbar_1 = require("@angular/material/toolbar");
var button_1 = require("@angular/material/button");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                dropdown_directive_1.DropdownDirective,
                auth_component_1.AuthComponent,
                loading_spinner_component_1.LoadingSpinnerComponent,
                news_component_1.AppNewsComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                button_1.MatButtonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                slider_1.MatSliderModule,
                card_1.MatCardModule,
                icon_1.MatIconModule,
                menu_1.MatMenuModule,
                sidenav_1.MatSidenavModule,
                list_1.MatListModule,
                toolbar_1.MatToolbarModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
