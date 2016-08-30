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
var FollowProduct = (function () {
    function FollowProduct(productservice) {
        this.productservice = productservice;
        this.hidebutton = [];
        this.productplatform = Models_1.Platform;
        this.updateclicked = false;
        this.products = new Array();
        this.product = new Models_1.Product();
        this.follower = new Models_1.Followers();
        this.followers = new Array();
    }
    FollowProduct.prototype.ngOnInit = function () {
        this.getProducts();
    };
    FollowProduct.prototype.Follow = function (productobj) {
        this.hidebutton[productobj.Id] = true;
        this.FollowProducts(productobj);
        this.product = productobj;
    };
    FollowProduct.prototype.Unfollow = function (productobj) {
        this.hidebutton[productobj.Id] = false;
        this.UnfollowFollowers(productobj.Id);
    };
    FollowProduct.prototype.ProductUpdates = function (productobj) {
        this.updateclicked = true;
        this.ProductId = productobj.Id;
    };
    FollowProduct.prototype.getProducts = function () {
        var _this = this;
        var displayOwner = this.productservice.getProduct()
            .subscribe(function (products) {
            _this.products = products;
            _this.getFollowProducts();
        }, function (err) {
            _this.errorMessage = err;
        }, function () {
        });
    };
    FollowProduct.prototype.FollowProducts = function (productobj) {
        var _this = this;
        this.productservice.followProduct(productobj)
            .subscribe(function (response) { console.log("Success Response" + response); }, function (error) { console.log("Error happened" + error); }, function () {
            _this.getFollowProducts();
            _this.getProducts();
        });
    };
    FollowProduct.prototype.getFollowProducts = function () {
        var _this = this;
        this.productservice.getFollow()
            .subscribe(function (followers) {
            _this.followers = followers;
        }, function (err) {
            _this.errorMessage = err;
        }, function () {
            for (var _i = 0, _a = _this.followers; _i < _a.length; _i++) {
                var follower = _a[_i];
                _this.hidebutton[follower.ProductId] = true;
            }
        });
    };
    FollowProduct.prototype.UnfollowFollowers = function (productId) {
        var _this = this;
        this.productservice.unfollowProduct(productId)
            .subscribe(function (response) {
            console.log("Success Response" + response);
        }, function (error) { console.log("Error happened" + error); }, function () {
            _this.getProducts();
        });
    };
    FollowProduct = __decorate([
        core_1.Component({
            selector: 'follow-product',
            providers: [Service_1.Service],
            templateUrl: 'App/Owners/FollowProduct.component.html'
        }), 
        __metadata('design:paramtypes', [Service_1.Service])
    ], FollowProduct);
    return FollowProduct;
}());
exports.FollowProduct = FollowProduct;
//# sourceMappingURL=FollowProduct.component.js.map