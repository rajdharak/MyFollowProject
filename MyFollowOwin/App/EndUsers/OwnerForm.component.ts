import { Component, Injectable, OnInit} from '@angular/core';
import {Owner} from './../Shared/Models';
import {Service} from './../Shared/Service';
import {ProductList} from './../EndUsers/ProductList.component';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute } from '@angular/router';
@Component({
    selector: 'owner-form',    
    providers: [Service],
    directives: [ProductList,ROUTER_DIRECTIVES],
    templateUrl:'App/EndUsers/OwnerForm.component.html'    
})

export class OwnerFormComponent implements OnInit {   
    owners: Array<Owner>;     
    errorMessage: string;      
    owner: Owner;
    active = true;
   constructor(private ownerservice: Service,private route:Router) {
       this.owners = new Array<Owner>();     
       this.owner = new Owner();
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
       this.active = false;
       setTimeout(() => this.active = true, 0);
   }
  
   onSubmit(owner: Owner) {
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