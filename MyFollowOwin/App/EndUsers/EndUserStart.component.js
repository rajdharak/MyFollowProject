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
var ProductList_component_1 = require('./../EndUsers/ProductList.component');
var router_1 = require('@angular/router');
var EndUserStart = (function () {
    function EndUserStart() {
    }
    EndUserStart = __decorate([
        core_1.Component({
            selector: 'enduser-start',
            providers: [Service_1.Service],
            directives: [ProductList_component_1.ProductList, router_1.ROUTER_DIRECTIVES],
            templateUrl: 'App/EndUsers/EndUserStart.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], EndUserStart);
    return EndUserStart;
}());
exports.EndUserStart = EndUserStart;
//# sourceMappingURL=EndUserStart.component.js.map