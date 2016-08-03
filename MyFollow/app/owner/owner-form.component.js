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
var services_1 = require('./services');
var OwnerComponent = (function () {
    function OwnerComponent(ownerservice) {
        this.ownerservice = ownerservice;
        this.mode = 'Observable';
    }
    OwnerComponent.prototype.onSubmit = function (owner) {
        var _this = this;
        if (!name) {
            return;
        }
        this.ownerservice.onSubmit(owner)
            .subscribe(function (owner) { return _this.owners.push(owner); }, function (error) { return _this.errorMessage = error; });
    };
    OwnerComponent = __decorate([
        core_1.Component({
            selector: 'owner-form',
            templateUrl: 'App/owner/owner-form.component.html',
            providers: [services_1.OwnerService]
        }), 
        __metadata('design:paramtypes', [services_1.OwnerService])
    ], OwnerComponent);
    return OwnerComponent;
}());
exports.OwnerComponent = OwnerComponent;
//# sourceMappingURL=owner-form.component.js.map