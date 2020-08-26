"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserpageComponent = void 0;
var core_1 = require("@angular/core");
var UserpageComponent = /** @class */ (function () {
    function UserpageComponent(service) {
        this.service = service;
    }
    UserpageComponent.prototype.ngOnInit = function () {
        var _this = this;
        // function from the image service
        this.service.getImageDetailList();
        this.service.imageDetailList.snapshotChanges().subscribe(// subscribe to observable & call snapshotChanges function returns all the image file details
        // call back function w paramater list
        function (// subscribe to observable & call snapshotChanges function returns all the image file details
        list) {
            // maps callback func returns caption, imageurl, and catagory and save in new array
            _this.imageList = list.map(function (item) { return item.payload.val(); });
            //
            //this.rowIndexArray =  Array.from(Array(Math.ceil((this.imageList.length+1) / 3)).keys());
        });
    };
    UserpageComponent = __decorate([
        core_1.Component({
            selector: 'app-userpage',
            templateUrl: './userpage.component.html',
            styleUrls: ['./userpage.component.css']
        })
    ], UserpageComponent);
    return UserpageComponent;
}());
exports.UserpageComponent = UserpageComponent;
