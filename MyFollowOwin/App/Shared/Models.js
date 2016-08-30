"use strict";
(function (OwnerStates) {
    OwnerStates[OwnerStates["Pending"] = 0] = "Pending";
    OwnerStates[OwnerStates["Approved"] = 1] = "Approved";
    OwnerStates[OwnerStates["Rejected"] = 2] = "Rejected";
})(exports.OwnerStates || (exports.OwnerStates = {}));
var OwnerStates = exports.OwnerStates;
(function (Platform) {
    Platform[Platform["Mobile"] = 0] = "Mobile";
    Platform[Platform["Web"] = 1] = "Web";
    Platform[Platform["IOT"] = 2] = "IOT";
})(exports.Platform || (exports.Platform = {}));
var Platform = exports.Platform;
var Owner = (function () {
    function Owner() {
        this.OwnerStates = OwnerStates.Pending;
    }
    return Owner;
}());
exports.Owner = Owner;
var Product = (function () {
    function Product() {
    }
    return Product;
}());
exports.Product = Product;
var ProductUpdate = (function () {
    function ProductUpdate() {
    }
    return ProductUpdate;
}());
exports.ProductUpdate = ProductUpdate;
var ProductMedia = (function () {
    function ProductMedia() {
    }
    return ProductMedia;
}());
exports.ProductMedia = ProductMedia;
var Followers = (function () {
    function Followers() {
    }
    return Followers;
}());
exports.Followers = Followers;
//# sourceMappingURL=Models.js.map