import { Component, Injectable, OnInit,Input} from '@angular/core';
import {Product} from './../Shared/Models';
import {Service} from './../Shared/Service';
import { ROUTER_DIRECTIVES, Router,ActivatedRoute } from '@angular/router';

@Component({
    selector: 'edit-product',
    providers: [Service, ROUTER_DIRECTIVES],
    templateUrl: 'App/Owners/EditProduct.component.html'
})

export class EditProduct implements OnInit
{
    products: Array<Product>;
    errorMessage: string;
    product: Product;
    productid: any;
    active= true;
    constructor(private productservice: Service,private activeRoute:ActivatedRoute) {
        this.products = new Array<Product>();
        this.product = new Product();
    }

    ngOnInit()
    {
        this.productid = this.activeRoute.snapshot.params['id'];
        console.log(this.productid);
    }

    cleanUp() {
        this.product.AppStoreUrl = null;
        this.product.Description = null;
        this.product.HomepageUrl = null;
        this.product.Name = null;
        this.product.PlayStoreUrl = null;
        this.product.ProductPlatform = null;
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    onSubmit(product: Product) {
  
        product.Id = this.productid;
        this.EditProductData();
        this.cleanUp();
    }
    EditProductData() {
        this.productservice.editProduct(this.product)
            .subscribe((products) => {
                this.products = products
            },
            err => {
                this.errorMessage = err;
            });
    }
}