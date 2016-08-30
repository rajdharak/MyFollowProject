import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import {Owner, Product,ProductUpdate,ProductMedia} from './Models';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class Service {
   
    private ownerUrl = 'api/ProductOwners/';
    private productUrl = 'api/Products/';
    private followUrl = 'api/Followers/';
    private productUpdateUrl = 'api/ProductUpdates/';
    private productMediaUrl = 'api/ProductMedias/';
    private ownersProduct = 'api/OwnerProductMappings';
    constructor(private http: Http) { }

    getOwners() {
        return this.http.get(this.ownerUrl)
            .map(response => response.json());
    }


    updateOwnerState(ownerobj: Owner) {
        let headers = new Headers({
            'Content-Type': 'application/json',
        });
        return this.http.put(this.ownerUrl + ownerobj.Id, JSON.stringify(ownerobj), { headers: headers });
    }
    getOwnersProduct() {
        return this.http.get(this.ownersProduct)
            .map(response => response.json());
    }
    addOwner(ownerobj: Owner) {
        let headers = new Headers({
            'Content-Type': 'application/json',
        });
        return this.http.post(this.ownerUrl, JSON.stringify(ownerobj), { headers: headers }).map(res => res.json());
    }

    addProduct(productobj: Product) {
        let headers = new Headers({
            'Content-Type': 'application/json',
        });
        return this.http.post(this.productUrl, JSON.stringify(productobj), { headers: headers }).map(res => res.json());
    }

    getProduct() {
        return this.http.get(this.productUrl)
            .map(response => response.json());
    }

    getProductToFollow() {
        return this.http.get(this.productUrl)
            .map(response => response.json());
    }
    deleteProduct(productobj: Product) {
        let headers = new Headers({
            'Content-Type': 'application/json',
        });

        return this.http.delete(this.productUrl + productobj.Id);

    }
    editProduct(productobj: Product) {
        let headers = new Headers({
            'Content-Type': 'application/json',
        });
        return this.http.put(this.productUrl + productobj.Id, JSON.stringify(productobj), { headers: headers }).map(res => res.json());
    }

    followProduct(productobj: Product) {
        let headers = new Headers({
            'Content-Type': 'application/json',
        });
      
        return this.http.post(this.followUrl + productobj.Id, JSON.stringify(productobj.Id), { headers: headers }).map(res => res.json());
    }
    unfollowProduct(productId:number) {
        return this.http.delete(this.followUrl + productId);
    }
    getFollow() {
        return this.http.get(this.followUrl)
            .map(response => response.json());
    }

    deleteFollower(productId: number) {
        return this.http.delete(this.followUrl + productId);
    }
    updateProduct(productobj: ProductUpdate) {
        let headers = new Headers({
            'Content-Type': 'application/json',
        });
        return this.http.post(this.productUpdateUrl+productobj.ProductId, JSON.stringify(productobj), { headers: headers }).map(res => res.json());
    }
    addProductMedia(productMediaobj: ProductMedia) {
        let headers = new Headers({
            'Content-Type': 'application/json',
        });
        return this.http.post(this.productMediaUrl, JSON.stringify(productMediaobj), { headers: headers }).map(res => res.json());
    }
    getProductMedia() {
        return this.http.get(this.productMediaUrl)
            .map(response => response.json());
    }

  
}