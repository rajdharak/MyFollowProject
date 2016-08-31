import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';
import {Service} from './../Shared/Service';
import {Product} from './../Shared/Models';
import {EditProduct} from './../Owners/EditProduct.component'; 
import {UpdateProduct} from './../Owners/UpdateProduct.component';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
@Component({
    selector: 'added-products',   
    providers: [Service],
    directives: [EditProduct, UpdateProduct, ROUTER_DIRECTIVES],
    templateUrl: 'App/Owners/ListProducts.component.html'
})
export class ListProductsComponent implements OnInit {
    products: Array<Product>;
    errorMessage: string;
    product: Product;
    productid: number;
    constructor(private productservice: Service, private router: Router)
    {
        this.products = new Array<Product>();
        this.product = new Product();
    }

    ngOnInit()
    {
        this.getProducts();
    }

    ClickToEdit: Boolean = false;
    clickedToEdit(productid: number)
    {
        console.log(productid);
        this.productid = productid;
        this.ClickToEdit = true;
    }

    ClickToUpdate: Boolean = false;
    clickedToUpdate(productid: number)
    {
        this.productid = productid;
        this.ClickToUpdate = true;
    }
   
    getProducts()
    {
        var displayOwner = this.productservice.getOwnersProduct()
            .subscribe((products) => {
                this.products = products
            }, err => {
                this.errorMessage = err;
            });
    }

    deleteProduct(productid: number) {
        this.product.Id = productid;
        this.DeleteProduct();
    }

    DeleteProduct() {
        this.productservice.deleteProduct(this.product)
            .subscribe(function (response) {
                console.log("Success Response" + response)
            },
            function (error) { console.log("Error happened" + error) },
            () => {
                this.getProducts();

            });
    }

    cleanUp() {
        this.product.AppStoreUrl = null;
        this.product.Description = null;
        this.product.HomepageUrl = null;
        this.product.Name = null;
        this.product.PlayStoreUrl = null;
        this.product.ProductPlatform = null;
    }
}