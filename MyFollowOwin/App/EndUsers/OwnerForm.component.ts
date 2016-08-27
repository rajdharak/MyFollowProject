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
       this.owner = null;

   }
  
    onSubmit(owner: OwnerModel) {
        console.log(owner.CompanyName);
        console.log(owner.Description);
        console.log(owner.FoundedYear);
        console.log(owner.WebsiteUrl);
        console.log(owner.OwnerStates)       
        this.AddOwnerData();
        this.cleanUp();

        alert("Your Request is Submited...!!");
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