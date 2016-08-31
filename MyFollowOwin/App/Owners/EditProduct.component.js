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
var router_1 = require('@angular/router');
var EditProduct = (function () {
    function EditProduct(productservice, activeRoute) {
        this.productservice = productservice;
        this.activeRoute = activeRoute;
        this.active = true;
        this.products = new Array();
        this.product = new Models_1.Product();
    }
    EditProduct.prototype.ngOnInit = function () {
        this.productid = this.activeRoute.snapshot.params['id'];
        console.log(this.productid);
    };
    EditProduct.prototype.cleanUp = function () {
        var _this = this;
        this.product.AppStoreUrl = null;
        this.product.Description = null;
        this.product.HomepageUrl = null;
        this.product.Name = null;
        this.product.PlayStoreUrl = null;
        this.product.ProductPlatform = null;
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    EditProduct.prototype.onSubmit = function (product) {
        product.Id = this.productid;
        this.EditProductData();
        this.cleanUp();
    };
    EditProduct.prototype.EditProductData = function () {
        var _this = this;
        this.productservice.editProduct(this.product)
            .subscribe(function (products) {
            _this.products = products;
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    EditProduct = __decorate([
        core_1.Component({
            selector: 'edit-product',
            providers: [Service_1.Service, router_1.ROUTER_DIRECTIVES],
            templateUrl: 'App/Owners/EditProduct.component.html'
        }), 
        __metadata('design:paramtypes', [Service_1.Service, router_1.ActivatedRoute])
    ], EditProduct);
    return EditProduct;
}());
exports.EditProduct = EditProduct;
//# sourceMappingURL=EditProduct.component.js.map