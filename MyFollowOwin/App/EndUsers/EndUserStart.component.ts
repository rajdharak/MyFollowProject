import { Component, Injectable} from '@angular/core';
import {Service} from './../Shared/Service';
import {ProductList} from './../EndUsers/ProductList.component';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute } from '@angular/router';
@Component({
    selector: 'enduser-start',
    providers: [Service],
    directives: [ProductList, ROUTER_DIRECTIVES],
    templateUrl: 'App/EndUsers/EndUserStart.component.html'
})

export class EndUserStart {
    
}