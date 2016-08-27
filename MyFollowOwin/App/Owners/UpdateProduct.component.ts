import { Component, Injectable, OnInit, Input} from '@angular/core';
import {ProductUpdate,ProductMedia} from './../Shared/Models';
import {Service} from './../Shared/Service';
import {ProductMedias}from './ProductMedia.component';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute } from '@angular/router';
@Component({
    selector: 'update-product',
    providers: [Service],
    directives: [ProductMedias],
    templateUrl: 'App/Owners/UpdateProduct.component.html'
})

export class UpdateProduct implements OnInit {

    productUpdates: Array<ProductUpdate>;
    errorMessage: string;
    productUpdate: ProductUpdate;
    productid: number;
    productmediaId: number;
    constructor(private productservice: Service,private activeRoute:ActivatedRoute) {
        this.productUpdates = new Array<ProductUpdate>();
        this.productUpdate = new ProductUpdate();
    }
    ngOnInit() {
        this.productid = this.activeRoute.snapshot.params['id'];
    }
    sendProductMediaid(productmedia:ProductMedia ) {
        console.log(productmedia);   
    }
    cleanUp() {
        this.productUpdate.Details = null;
        this.productUpdate.Title = null;
    }
    onSubmit(product: ProductUpdate) {
        product.ProductId = this.productid;
        console.log(product.Details);
        this.UpdateProductData();
        this.cleanUp();
    }
    UpdateProductData() {
        this.productservice.updateProduct(this.productUpdate)
            .subscribe((productUpdate) => {
                this.productUpdates = productUpdate
            },
            err => {
                this.errorMessage = err;
            });
    }
   
      
}