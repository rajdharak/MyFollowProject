"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Models_1 = require('./../Shared/Models');
var Service_1 = require('./../Shared/Service');
//import {FILE_UPLOAD_DIRECTIVES, FileUploader, Headers} from 'ng2-file-upload/ng2-file-upload';
//const URL = 'http://localhost:65039/api/ProductMedias/';
var ProductMedias = (function () {
    function ProductMedias(productservice) {
        this.productservice = productservice;
        this.sendProductMediaid = new core_1.EventEmitter();
        this.productMedias = new Array();
        this.productMedia = new Models_1.ProductMedia();
    }
    ProductMedias.prototype.ngOnInit = function () {
        this.getProductMedias();
    };
    ProductMedias.prototype.getProductMedias = function () {
        var _this = this;
        var displayOwner = this.productservice.getProductMedia()
            .subscribe(function (productMedias) {
            _this.productMedias = productMedias;
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    ProductMedias.prototype.onSubmit = function (productMedia) {
        this.sendProductMediaid.emit(productMedia);
        this.AddMedia();
    };
    ProductMedias.prototype.AddMedia = function () {
        var _this = this;
        this.productservice.addProductMedia(this.productMedia)
            .subscribe(function (productMedia) {
            _this.productMedia = productMedia;
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    ProductMedias.prototype.PicUpload = function (event) {
        var _this = this;
        var file = event.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            _this.productMedia.Data = reader.result;
        };
        reader.readAsDataURL(file);
        console.log(this.productMedia.Data);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ProductMedias.prototype, "productmedia", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ProductMedias.prototype, "sendProductMediaid", void 0);
    ProductMedias = __decorate([
        core_1.Component({
            selector: 'media-form',
            providers: [Service_1.Service],
            templateUrl: 'App/Owners/ProductMedia.component.html',
        }), 
        __metadata('design:paramtypes', [Service_1.Service])
    ], ProductMedias);
    return ProductMedias;
}());
exports.ProductMedias = ProductMedias;
//# sourceMappingURL=ProductMedia.component.js.map