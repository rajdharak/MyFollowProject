import { Component, Injectable, OnInit} from '@angular/core';
import {Product} from './../Shared/Models';
import {Service} from './../Shared/Service';
import {ListProductsComponent} from './../Owners/ListProducts.component';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
    selector: 'add-product',
    providers: [Service],
    directives: [ListProductsComponent, ROUTER_DIRECTIVES],  
    templateUrl: 'App/Owners/AddProduct.component.html'
})

export class AddProduct implements OnInit {

    products: Array<Product>;
    errorMessage: string;
    product: Product;
    active = true;
    constructor(private productservice: Service) {
        this.products = new Array<Product>();
        this.product = new Product();
    }

    ngOnInit()
    {

    }
    cleanUp()
    {
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
        this.AddProductData();
        this.cleanUp();
    }
    AddProductData() {
        this.productservice.addProduct(this.product)
            .subscribe(function (response) {
                console.log("Success Response" + response)
            },
            function (error) { console.log("Error happened" + error) },
            () => {
            });
    }
}