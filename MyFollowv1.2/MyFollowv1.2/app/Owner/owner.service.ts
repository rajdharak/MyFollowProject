﻿import { Injectable }     from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Owner }          from './owner';
// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable

// See node_module/rxjs/Rxjs.js
// Import just the rxjs statics and operators we need for THIS app.

// Statics

import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class OwnerService {
    private ownerUrl = 'api/Owners';
    constructor(private http: Http) { }


    getOwner() {
        return this.http.get(this.ownerUrl)
            .map(response => response.json());
       
    }


    
    setOwner(owner:Owner) {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http
            .post(this.ownerUrl, JSON.stringify(owner), { headers: headers })
            .map(res => res.json().data)         
    }
    
    private handleError(error: any) {
       
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}