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
var ProductList_component_1 = require('./../EndUsers/ProductList.component');
var router_1 = require('@angular/router');
var OwnerFormComponent = (function () {
    function OwnerFormComponent(ownerservice, route) {
        this.ownerservice = ownerservice;
        this.route = route;
        this.active = true;
        this.Click = false;
        this.owners = new Array();
        this.owner = new Models_1.Owner();
    }
    OwnerFormComponent.prototype.clicked = function () {
        this.Click = true;
    };
    OwnerFormComponent.prototype.ngOnInit = function () {
    };
    OwnerFormComponent.prototype.cleanUp = function () {
        var _this = this;
        this.owner.CompanyName = null;
        this.owner.Description = null;
        this.owner.FoundedYear = null;
        this.owner.WebsiteUrl = null;
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    OwnerFormComponent.prototype.onSubmit = function (owner) {
        this.AddOwnerData();
        this.cleanUp();
    };
    OwnerFormComponent.prototype.AddOwnerData = function () {
        var _this = this;
        this.ownerservice.addOwner(this.owner)
            .subscribe(function (owners) {
            _this.owners = owners;
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    OwnerFormComponent = __decorate([
        core_1.Component({
            selector: 'owner-form',
            providers: [Service_1.Service],
            directives: [ProductList_component_1.ProductList, router_1.ROUTER_DIRECTIVES],
            templateUrl: 'App/EndUsers/OwnerForm.component.html'
        }), 
        __metadata('design:paramtypes', [Service_1.Service, router_1.Router])
    ], OwnerFormComponent);
    return OwnerFormComponent;
}());
exports.OwnerFormComponent = OwnerFormComponent;
//# sourceMappingURL=OwnerForm.component.js.map