import {Component}from '@angular/core';
import {Owner} from './owner';
//import { OwnerService }from './owner.service';
@Component({
    selector: 'owner-form',
    template:`
        <form #ownerForm>
            <div class="form-group">
                <label for="name">CompanyName</label>
                <input type="text" class="form-control" required
                       [(ngModel)]="owner.CompanyName" />
            </div>
            <div class="form-group">
                <label for="alterEgo">Description</label>
                <input type="text" class="form-control"
                       [(ngModel)]="owner.Description" />
                     
            </div>
            <div class="form-group">
                <label for="alterEgo">FoundedYear</label>
                <input type="text" class="form-control"
                       [(ngModel)]="owner.FoundedYear" />

            </div>
            <div class="form-group">
                <label for="alterEgo">Websiteurl</label>
                <input type="text" class="form-control"
                       [(ngModel)]="owner.Websiteurl" />

            </div>
            <button (click)="addOwner(ownerForm.value);ownerForm=''">
               Submit
            </button>
        </form>
`
    //providers: [OwnerService]
})
export class OwnerFormComponent
{
    //owners: Array<Owner>;
    //owner: Owner;
    //errorMessage: string;
    //constructor(private ownerservice: OwnerService) {
    //    this.owners = new Array<Owner>();
    //    this.owner = new Owner();
    //}
   
        
}