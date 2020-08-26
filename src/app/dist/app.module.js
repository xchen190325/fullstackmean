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
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var comment_create_component_1 = require("./news/comments/comment-create/comment-create.component");
var input_1 = require("@angular/material/input");
var form_field_1 = require("@angular/material/form-field");
var comment_list_component_1 = require("./news/comments/comment-list/comment-list.component");
var expansion_1 = require("@angular/material/expansion");
var post_create_component_1 = require("./news/posts/post-create/post-create.component");
var post_list_component_1 = require("./news/posts/post-list/post-list.component");
var sms_send_component_1 = require("./sms-send/sms-send.component");
var sms_send_component_2 = require("./sms-send/sms-send.component");
var dialog_1 = require("@angular/material/dialog");
var userpage_component_1 = require("./userpage/userpage.component");
var image_component_1 = require("./userpage/image/image.component");
var fire_1 = require("@angular/fire");
var storage_1 = require("@angular/fire/storage");
var environment_1 = require("../environments/environment");
var database_1 = require("@angular/fire/database");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                image_component_1.ImageComponent,
                userpage_component_1.UserpageComponent,
                sms_send_component_1.SmsSendComponent,
                post_list_component_1.PostListComponent,
                dropdown_directive_1.DropdownDirective,
                auth_component_1.AuthComponent,
                sms_send_component_2.DialogOverviewExampleDialog,
                loading_spinner_component_1.LoadingSpinnerComponent,
                news_component_1.AppNewsComponent,
                comment_create_component_1.CommentCreateComponent,
                comment_list_component_1.CommentListComponent,
                post_create_component_1.PostCreateComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                fire_1.AngularFireModule.initializeApp(environment_1.environment.firebaseConfig),
                storage_1.AngularFireStorageModule,
                database_1.AngularFireDatabaseModule,
                ng_bootstrap_1.NgbPaginationModule,
                ng_bootstrap_1.NgbAlertModule,
                expansion_1.MatExpansionModule,
                button_1.MatButtonModule,
                dialog_1.MatDialogModule,
                form_field_1.MatFormFieldModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                slider_1.MatSliderModule,
                card_1.MatCardModule,
                input_1.MatInputModule,
                icon_1.MatIconModule,
                menu_1.MatMenuModule,
                sidenav_1.MatSidenavModule,
                list_1.MatListModule,
                animations_1.BrowserAnimationsModule,
                toolbar_1.MatToolbarModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent],
            entryComponents: [sms_send_component_2.DialogOverviewExampleDialog]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
