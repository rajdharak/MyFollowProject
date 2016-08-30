import { Component, Injectable, OnInit} from '@angular/core';
import {Product} from './../Shared/Models';
import {Service} from './../Shared/Service';
import {ListProductsComponent} from './../Owners/ListProducts.component';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
    selector: 'product-owner',
    providers: [Service],
    directives: [ListProductsComponent,ROUTER_DIRECTIVES],
    templateUrl: 'App/Owners/OwnerStart.component.html'
})

export class OwnerStart implements OnInit {

    products: Array<Product>;
    errorMessage: string;
    product: Product;

    constructor(private productservice: Service) {
        this.products = new Array<Product>();
        this.product = new Product();
    }
    ngOnInit() {

    }
}