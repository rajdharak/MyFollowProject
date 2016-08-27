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
var ProductMedia_component_1 = require('./ProductMedia.component');
var router_1 = require('@angular/router');
var UpdateProduct = (function () {
    function UpdateProduct(productservice, activeRoute) {
        this.productservice = productservice;
        this.activeRoute = activeRoute;
        this.productUpdates = new Array();
        this.productUpdate = new Models_1.ProductUpdate();
    }
    UpdateProduct.prototype.ngOnInit = function () {
        this.productid = this.activeRoute.snapshot.params['id'];
    };
    UpdateProduct.prototype.sendProductMediaid = function (productmedia) {
        console.log(productmedia);
    };
    UpdateProduct.prototype.cleanUp = function () {
        this.productUpdate.Details = null;
        this.productUpdate.Title = null;
    };
    UpdateProduct.prototype.onSubmit = function (product) {
        product.ProductId = this.productid;
        console.log(product.Details);
        this.UpdateProductData();
        this.cleanUp();
    };
    UpdateProduct.prototype.UpdateProductData = function () {
        var _this = this;
        this.productservice.updateProduct(this.productUpdate)
            .subscribe(function (productUpdate) {
            _this.productUpdates = productUpdate;
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    UpdateProduct = __decorate([
        core_1.Component({
            selector: 'update-product',
            providers: [Service_1.Service],
            directives: [ProductMedia_component_1.ProductMedias],
            templateUrl: 'App/Owners/UpdateProduct.component.html'
        }), 
        __metadata('design:paramtypes', [Service_1.Service, router_1.ActivatedRoute])
    ], UpdateProduct);
    return UpdateProduct;
}());
exports.UpdateProduct = UpdateProduct;
//# sourceMappingURL=UpdateProduct.component.js.map