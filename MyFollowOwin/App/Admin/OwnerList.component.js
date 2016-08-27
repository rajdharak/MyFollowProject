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
var OwnerRequest = (function () {
    function OwnerRequest(ownerservice) {
        this.ownerservice = ownerservice;
        this.owners = new Array();
        this.owner = new Models_1.OwnerModel();
    }
    OwnerRequest.prototype.ngOnInit = function () {
        this.getOwners();
    };
    OwnerRequest.prototype.getOwners = function () {
        var _this = this;
        this.ownerservice.getOwners()
            .subscribe(function (owners) {
            _this.owners = owners;
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    OwnerRequest.prototype.UpdateOwnerData = function () {
        var _this = this;
        var ownerupdate = this.ownerservice.updateOwnerState(this.owner)
            .subscribe(function (response) { console.log("Success Response" + response); }, function (error) { console.log("Error happened" + error); }, function () { _this.getOwners(); });
    };
    OwnerRequest.prototype.Approve = function (ownerId) {
        this.owner.Id = ownerId;
        this.owner.OwnerStates = Models_1.OwnerStates.Approved;
        this.UpdateOwnerData();
    };
    OwnerRequest.prototype.Reject = function (ownerId) {
        this.owner.Id = ownerId;
        this.owner.OwnerStates = Models_1.OwnerStates.Rejected;
        this.UpdateOwnerData();
    };
    OwnerRequest = __decorate([
        core_1.Component({
            selector: 'owner-requests',
            providers: [Service_1.Service],
            templateUrl: 'App/Admin/OwnerList.component.html'
        }), 
        __metadata('design:paramtypes', [Service_1.Service])
    ], OwnerRequest);
    return OwnerRequest;
}());
exports.OwnerRequest = OwnerRequest;
//# sourceMappingURL=OwnerList.component.js.map