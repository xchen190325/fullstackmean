"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ImageComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var operators_1 = require("rxjs/operators");
var ImageComponent = /** @class */ (function () {
    function ImageComponent(storage, service) {
        this.storage = storage;
        this.service = service;
        this.selectedImage = null;
        this.formTemplate = new forms_1.FormGroup({
            category: new forms_1.FormControl(''),
            imageUrl: new forms_1.FormControl('', forms_1.Validators.required)
        });
    }
    ImageComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    ImageComponent.prototype.showPreview = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) { return _this.imgSrc = e.target.result; };
            reader.readAsDataURL(event.target.files[0]);
            this.selectedImage = event.target.files[0];
        }
        else {
            this.imgSrc = '';
            this.selectedImage = null;
        }
    };
    ImageComponent.prototype.onSubmit = function (formValue) {
        var _this = this;
        this.isSubmitted = true;
        if (this.formTemplate.valid) {
            var filePath = formValue.category + "/" + this.selectedImage.name.split('.').slice(0, -1).join('.') + "_" + new Date().getTime();
            var fileRef_1 = this.storage.ref(filePath);
            this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(operators_1.finalize(function () {
                fileRef_1.getDownloadURL().subscribe(function (url) {
                    formValue['imageUrl'] = url;
                    _this.service.insertImageDetails(formValue);
                    _this.resetForm();
                });
            })).subscribe();
        }
    };
    Object.defineProperty(ImageComponent.prototype, "formControls", {
        get: function () {
            return this.formTemplate['controls'];
        },
        enumerable: false,
        configurable: true
    });
    ImageComponent.prototype.resetForm = function () {
        this.formTemplate.reset();
        this.formTemplate.setValue({
            imageUrl: '',
            category: ''
        });
        this.imgSrc = '';
        this.selectedImage = null;
        this.isSubmitted = false;
    };
    ImageComponent = __decorate([
        core_1.Component({
            selector: 'app-image',
            templateUrl: './image.component.html',
            styles: []
        })
    ], ImageComponent);
    return ImageComponent;
}());
exports.ImageComponent = ImageComponent;
