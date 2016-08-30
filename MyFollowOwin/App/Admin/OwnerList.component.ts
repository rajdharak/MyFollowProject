import {Component,OnInit} from '@angular/core';
import {Service} from './../Shared/Service';
import {Owner, OwnerStates} from './../Shared/Models';
@Component({
    selector: 'owner-list', 
    providers: [Service],
    templateUrl:'App/Admin/OwnerList.component.html' 
})

export class OwnerList implements OnInit {

    owners: Array<Owner>;
    errorMessage: string;
    owner: Owner;

    constructor(private ownerservice: Service) {
        this.owners = new Array<Owner>();
        this.owner = new Owner();
    }


    ngOnInit() {
        this.getOwners();
    }

    getOwners() {
        this.ownerservice.getOwners()
            .subscribe((owners) => {
                this.owners = owners
            }, err => {
                this.errorMessage = err;
            });
    }

    UpdateOwnerData() {
        var ownerupdate = this.ownerservice.updateOwnerState(this.owner)
            .subscribe(
            function (response) { console.log("Success Response" + response) },
            function (error) { console.log("Error happened" + error) },
            () => { this.getOwners(); }

            );
    }

    Approve(ownerId: number) {
        this.owner.Id = ownerId;
        this.owner.OwnerStates = OwnerStates.Approved;
        this.UpdateOwnerData();
    }

    Reject(ownerId: number) {
        this.owner.Id = ownerId;
        this.owner.OwnerStates = OwnerStates.Rejected;
        this.UpdateOwnerData();
    }
}