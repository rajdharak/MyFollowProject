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
var Models_1 = require('./../Shared/Models');
var EditProduct_component_1 = require('./../Owners/EditProduct.component');
var UpdateProduct_component_1 = require('./../Owners/UpdateProduct.component');
var router_1 = require('@angular/router');
var ListProductsComponent = (function () {
    function ListProductsComponent(productservice, router) {
        this.productservice = productservice;
        this.router = router;
        this.ClickToEdit = false;
        this.ClickToUpdate = false;
        this.products = new Array();
        this.product = new Models_1.Product();
    }
    ListProductsComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ListProductsComponent.prototype.clickedToEdit = function (productid) {
        console.log(productid);
        this.productid = productid;
        this.ClickToEdit = true;
    };
    ListProductsComponent.prototype.clickedToUpdate = function (productid) {
        this.productid = productid;
        this.ClickToUpdate = true;
    };
    ListProductsComponent.prototype.getProducts = function () {
        var _this = this;
        var displayOwner = this.productservice.getOwnersProduct()
            .subscribe(function (products) {
            _this.products = products;
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    ListProductsComponent.prototype.deleteProduct = function (productid) {
        this.product.Id = productid;
        this.DeleteProduct();
    };
    ListProductsComponent.prototype.DeleteProduct = function () {
        var _this = this;
        this.productservice.deleteProduct(this.product)
            .subscribe(function (response) {
            console.log("Success Response" + response);
        }, function (error) { console.log("Error happened" + error); }, function () {
            _this.getProducts();
        });
    };
    ListProductsComponent.prototype.cleanUp = function () {
        this.product.AppStoreUrl = null;
        this.product.Description = null;
        this.product.HomepageUrl = null;
        this.product.Name = null;
        this.product.PlayStoreUrl = null;
        this.product.ProductPlatform = null;
    };
    ListProductsComponent = __decorate([
        core_1.Component({
            selector: 'added-products',
            providers: [Service_1.Service],
            directives: [EditProduct_component_1.EditProduct, UpdateProduct_component_1.UpdateProduct, router_1.ROUTER_DIRECTIVES],
            templateUrl: 'App/Owners/ListProducts.component.html'
        }), 
        __metadata('design:paramtypes', [Service_1.Service, router_1.Router])
    ], ListProductsComponent);
    return ListProductsComponent;
}());
exports.ListProductsComponent = ListProductsComponent;
//# sourceMappingURL=ListProducts.component.js.map