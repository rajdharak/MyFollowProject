import { Component }         from '@angular/core';
import { NgForm }    from '@angular/common';
import { Router }            from '@angular/router';
import { Owner }                from './owner';
import { OwnerService } from './services';
@Component({
    selector: 'owner-form',
    templateUrl: 'App/owner/owner-form.component.html'
    ,providers:[OwnerService]
})
export class OwnerComponent  {
    
    errorMessage: string;
    owners: Owner[];
    mode = 'Observable';
 
    constructor(private ownerservice: OwnerService) {}

    onSubmit(owner: Owner) {
        if (!name) { return; }
        this.ownerservice.onSubmit(owner)
            .subscribe(
            owner => this.owners.push(owner),
            error => this.errorMessage = <any>error);
    }
}
        


