import { provideRouter, RouterConfig }  from '@angular/router';
import {OwnerList}from './Admin/OwnerList.component';
import {OwnerFormComponent}from './EndUsers/OwnerForm.component';
import {ProductList}from './EndUsers/ProductList.component';
import {AddProduct}from './Owners/AddProduct.component';
import {EditProduct}from './Owners/EditProduct.component';
import {ListProductsComponent}from './Owners/ListProducts.component';
import {ProductMedias}from './Owners/ProductMedia.component';
import {UpdateProduct}from './Owners/UpdateProduct.component';
import {FollowProduct}from './Owners/FollowProduct.component';
const routes: RouterConfig = [
    {
        path: 'addproduct',
        component: AddProduct
    },
    {
        path: 'listproduct',
        component: ListProductsComponent
    },
    {
        path: 'edit/:id',
        component: EditProduct
    },
    {
        path: 'update/:id',
        component: UpdateProduct
    },
    {
        path: 'becomowner',
        component: OwnerFormComponent
    },
     {
        path: 'productlist',
        component: ProductList
    },
     {
        path: 'follow',
        component: FollowProduct
     }
];
export const appRouterProviders = [
    provideRouter(routes)
];