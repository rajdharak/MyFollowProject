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
var Service_1 = require('./../Shared/Service');
var ng2_file_upload_1 = require('ng2-file-upload/ng2-file-upload');
var URL = 'http://localhost:65039/api/ProductMedias/';
var ProductMedias = (function () {
    function ProductMedias() {
        this.myHeaders = [];
        this.uploader = new ng2_file_upload_1.FileUploader({ url: URL }); //, headers : this.test  });
    }
    ProductMedias = __decorate([
        core_1.Component({
            selector: 'media-form',
            providers: [Service_1.Service],
            templateUrl: 'App/Owners/ProductMedia.component.html',
            directives: [ng2_file_upload_1.FILE_UPLOAD_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductMedias);
    return ProductMedias;
}());
exports.ProductMedias = ProductMedias;
//# sourceMappingURL=ProductMedia.component.js.map