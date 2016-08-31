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
        path: 'Owner/Index/addproduct',
        component: AddProduct_component_1.AddProduct
    },
    {
        path: 'Owner/Index/listproduct',
        component: ListProducts_component_1.ListProductsComponent
    },
    {
        path: 'Owner/Index/edit/:id',
        component: EditProduct_component_1.EditProduct
    },
    {
        path: 'Owner/Index/update/:id',
        component: UpdateProduct_component_1.UpdateProduct
    },
    {
        path: 'Home/Index/becomowner',
        component: OwnerForm_component_1.OwnerFormComponent
    },
    {
        path: 'Home/Index/productlist',
        component: ProductList_component_1.ProductList
    },
    {
        path: 'Owner/Index/follow',
        component: FollowProduct_component_1.FollowProduct
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.route.js.map