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
        path: 'Owner/Index/addproduct',
        component: AddProduct
    },
    {
        path: 'Owner/Index/listproduct',
        component: ListProductsComponent
    },
    {
        path: 'Owner/Index/edit/:id',
        component: EditProduct
    },
    {
        path: 'Owner/Index/update/:id',
        component: UpdateProduct
    },
    {
        path: 'Home/Index/becomowner',
        component: OwnerFormComponent
    },
     {
         path: 'Home/Index/productlist',
        component: ProductList
    },
     {
         path: 'Owner/Index/follow',
        component: FollowProduct
     }
];
export const appRouterProviders = [
    provideRouter(routes)
];