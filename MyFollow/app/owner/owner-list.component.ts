import { Component }         from '@angular/core';

import { Router }            from '@angular/router';
import { Owner }                from './owner';
import { OwnerService } from './services';
@Component({
    selector: 'owner-list',
    templateUrl: 'App/owner/owner-list.component.html'
    ,/*providers:[OwnerService]*/
})
export class OwnerListComponent {
}
