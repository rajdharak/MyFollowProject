import { Component, OnInit } from '@angular/core';
import {Service} from './../Shared/Service';
import {Product} from './../Shared/Models';
@Component({
    selector: 'product-list',
    providers: [Service],
    templateUrl: 'App/EndUsers/ProductList.component.html'

})
export class ProductList implements OnInit {

    products: Array<Product>;
    errorMessage: string;
    product: Product;
 
    //public Check: boolean = false;
    constructor(private productservice: Service) {
        this.products = new Array<Product>();
        this.product = new Product();
    }
    ngOnInit() {
        this.getProducts();
    }

    getProducts() {
        var displayOwner = this.productservice.getProduct()
            .subscribe((products) => {
                this.products = products
            }, err => {
                this.errorMessage = err;
            });
    }
    
    followProduct(productId: number) {
        this.product.ProductId = productId;
        this.product.Check= false;
        this.FollowProduct();
    }

    unfollowProduct(productId: number) {
        this.product.ProductId = productId;
        this.product.Check = true;
        this.UnFollowProduct();
    }

    FollowProduct() {
        this.productservice.followProduct(this.product)
            .subscribe(function (response) {
                console.log("Success Response" + response)
            },
            function (error) { console.log("Error happened" + error) },
            () => {
                
                this.getProducts();

            });
    }
    UnFollowProduct() {
        this.productservice.unfollowProduct(this.product)
            .subscribe(function (response) {
                console.log("Success Response" + response)
            },
            function (error) { console.log("Error happened" + error) },
            () => {
               
                this.getProducts();

            });
    }
}