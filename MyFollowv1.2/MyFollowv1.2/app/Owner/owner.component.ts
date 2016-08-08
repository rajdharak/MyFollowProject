import { Component, OnInit } from '@angular/core';
import { Owner }from './owner';
import { OwnerService }from './owner.service';
@Component({
    selector: 'my-app',
    template:`
<ul>
  <li *ngFor="let owner of owners">
    {{owner.CompanyName}}
    {{owner.Description}}
    {{owner.FoundedYear}}
    {{owner.Websiteurl}}
  </li>
</ul>
`,
    providers:[OwnerService]
})
export class OwnerComponent implements OnInit {
    owners: Array<Owner>;
    owner: Owner;
    errorMessage: string;
    constructor(private ownerservice: OwnerService) {
        this.owners = new Array<Owner>();
        this.owner = new Owner();}

    ngOnInit() {
        this.getOwners();
    }
 
    getOwners() {
        this.ownerservice.getOwner()
            .subscribe((owners) => {
                this.owners = owners
            }, err => {
                this.errorMessage = err;
            });
    }    
}