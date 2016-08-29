import { Component, Injectable, OnInit} from '@angular/core';
import {OwnerModel} from './../Shared/Models';
import {Service} from './../Shared/Service';
import {ProductList} from './../EndUsers/ProductList.component';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute } from '@angular/router';
@Component({
    selector: 'owner-form',    
    providers: [Service],
    directives: [ProductList,ROUTER_DIRECTIVES],
    templateUrl:'App/EndUsers/OwnerForm.component.html'    
})

export class OwnerComponent implements OnInit {   
    owners: Array<OwnerModel>;     
    errorMessage: string;      
    owner: OwnerModel;
   constructor(private ownerservice: Service,private route:Router) {
       this.owners = new Array<OwnerModel>();     
       this.owner = new OwnerModel();
   }

   Click: Boolean = false;
   clicked() {
       this.Click = true;
   }
    
   ngOnInit() {
             
   }  
   cleanUp() {
       this.owner.CompanyName = null;
       this.owner.Description = null;
       this.owner.FoundedYear = null;
       this.owner.WebsiteUrl = null;

   }
  
    onSubmit(owner: OwnerModel) {
        this.AddOwnerData();
        this.cleanUp();
   }
  
    AddOwnerData() {
        this.ownerservice.addOwner(this.owner)
            .subscribe((owners) => {
                this.owners = owners
            },
            err => {
                this.errorMessage = err;
            });
    }
}