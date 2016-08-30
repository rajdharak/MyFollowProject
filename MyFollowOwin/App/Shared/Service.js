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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/do');
var Service = (function () {
    function Service(http) {
        this.http = http;
        this.ownerUrl = 'api/ProductOwners/';
        this.productUrl = 'api/Products/';
        this.followUrl = 'api/Followers/';
        this.productUpdateUrl = 'api/ProductUpdates/';
        this.productMediaUrl = 'api/ProductMedias/';
        this.ownersProduct = 'api/OwnerProductMappings';
    }
    Service.prototype.getOwners = function () {
        return this.http.get(this.ownerUrl)
            .map(function (response) { return response.json(); });
    };
    Service.prototype.updateOwnerState = function (ownerobj) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json',
        });
        return this.http.put(this.ownerUrl + ownerobj.Id, JSON.stringify(ownerobj), { headers: headers });
    };
    Service.prototype.getOwnersProduct = function () {
        return this.http.get(this.ownersProduct)
            .map(function (response) { return response.json(); });
    };
    Service.prototype.addOwner = function (ownerobj) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json',
        });
        return this.http.post(this.ownerUrl, JSON.stringify(ownerobj), { headers: headers }).map(function (res) { return res.json(); });
    };
    Service.prototype.addProduct = function (productobj) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json',
        });
        return this.http.post(this.productUrl, JSON.stringify(productobj), { headers: headers }).map(function (res) { return res.json(); });
    };
    Service.prototype.getProduct = function () {
        return this.http.get(this.productUrl)
            .map(function (response) { return response.json(); });
    };
    Service.prototype.getProductToFollow = function () {
        return this.http.get(this.productUrl)
            .map(function (response) { return response.json(); });
    };
    Service.prototype.deleteProduct = function (productobj) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json',
        });
        return this.http.delete(this.productUrl + productobj.Id);
    };
    Service.prototype.editProduct = function (productobj) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json',
        });
        return this.http.put(this.productUrl + productobj.Id, JSON.stringify(productobj), { headers: headers }).map(function (res) { return res.json(); });
    };
    Service.prototype.followProduct = function (productobj) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json',
        });
        return this.http.post(this.followUrl + productobj.Id, JSON.stringify(productobj.Id), { headers: headers }).map(function (res) { return res.json(); });
    };
    Service.prototype.unfollowProduct = function (productId) {
        return this.http.delete(this.followUrl + productId);
    };
    Service.prototype.getFollow = function () {
        return this.http.get(this.followUrl)
            .map(function (response) { return response.json(); });
    };
    Service.prototype.deleteFollower = function (productId) {
        return this.http.delete(this.followUrl + productId);
    };
    Service.prototype.updateProduct = function (productobj) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json',
        });
        return this.http.post(this.productUpdateUrl + productobj.ProductId, JSON.stringify(productobj), { headers: headers }).map(function (res) { return res.json(); });
    };
    Service.prototype.addProductMedia = function (productMediaobj) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json',
        });
        return this.http.post(this.productMediaUrl, JSON.stringify(productMediaobj), { headers: headers }).map(function (res) { return res.json(); });
    };
    Service.prototype.getProductMedia = function () {
        return this.http.get(this.productMediaUrl)
            .map(function (response) { return response.json(); });
    };
    Service = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], Service);
    return Service;
}());
exports.Service = Service;
//# sourceMappingURL=Service.js.map