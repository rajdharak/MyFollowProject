import { Component, OnInit, OnChanges } from '@angular/core';
import {Service} from './../Shared/Service';
import {Product, Platform, Followers} from './../Shared/Models';


@Component({
    selector: 'follow-product',
    providers: [Service],
    templateUrl: 'App/Owners/FollowProduct.component.html'
})
export class FollowProduct implements OnInit {

    ProductId: number;
    hidebutton: any[] = [];
    productplatform = Platform;
    products: Array<Product>;
    errorMessage: string;
    product: Product;
    follower: Followers;
    followers: Array<Followers>;


    constructor(private productservice: Service) {
        this.products = new Array<Product>();
        this.product = new Product();
        this.follower = new Followers();
        this.followers = new Array<Followers>();

    }
    ngOnInit() {
        this.getProducts();
    }

 


    Follow(productobj: Product) {
        this.hidebutton[productobj.Id] = true;
        this.FollowProducts(productobj);
        this.product = productobj;
    }



    Unfollow(productobj: Product) {
        this.hidebutton[productobj.Id] = false;
        this.UnfollowFollowers(productobj.Id);
    }

    updateclicked: boolean = false;
    ProductUpdates(productobj: Product) {
        this.updateclicked = true;
        this.ProductId = productobj.Id;

    }


    getProducts() {
        var displayOwner = this.productservice.getProduct()
            .subscribe((products) => {
                this.products = products
                this.getFollowProducts();
            }, err => {
                this.errorMessage = err;
            },
            () => {

            });
    }

    FollowProducts(productobj: Product) {
        this.productservice.followProduct(productobj)
            .subscribe(
            function (response) { console.log("Success Response" + response) },
            function (error) { console.log("Error happened" + error) },
            () => {
                this.getFollowProducts();
                this.getProducts();
            })
    }


    getFollowProducts() {
        this.productservice.getFollow()
            .subscribe((followers) => {
                this.followers = followers;


            }, err => {
                this.errorMessage = err;
            },
            () => {
                for (let follower of this.followers) {
                    this.hidebutton[follower.ProductId] = true;
                }
            });
    }

    UnfollowFollowers(productId: number) {
        this.productservice.unfollowProduct(productId)
            .subscribe(function (response) {
                console.log("Success Response" + response)
            },
            function (error) { console.log("Error happened" + error) },
            () => {
                this.getProducts();

            });
    }
}