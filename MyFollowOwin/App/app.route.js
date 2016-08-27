"use strict";
var router_1 = require('@angular/router');
var OwnerForm_component_1 = require('./EndUsers/OwnerForm.component');
var ProductList_component_1 = require('./EndUsers/ProductList.component');
var AddProduct_component_1 = require('./Owners/AddProduct.component');
var EditProduct_component_1 = require('./Owners/EditProduct.component');
var ListProducts_component_1 = require('./Owners/ListProducts.component');
var UpdateProduct_component_1 = require('./Owners/UpdateProduct.component');
var FollowProduct_component_1 = require('./Owners/FollowProduct.component');
var routes = [
    {
        path: 'addproduct',
        component: AddProduct_component_1.AddProduct
    },
    {
        path: 'listproduct',
        component: ListProducts_component_1.AddedProducts
    },
    {
        path: 'edit/:id',
        component: EditProduct_component_1.EditProduct
    },
    {
        path: 'update/:id',
        component: UpdateProduct_component_1.UpdateProduct
    },
    {
        path: 'becomowner',
        component: OwnerForm_component_1.OwnerComponent
    },
    {
        path: 'productlist',
        component: ProductList_component_1.ProductList
    },
    {
        path: 'follow',
        component: FollowProduct_component_1.FollowProduct
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.route.js.map