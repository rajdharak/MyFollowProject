import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';   // Load all features
import { ROUTER_DIRECTIVES } from '@angular/router';




@Component({
    selector: 'owner-form',
    template: `
                    <a [routerLink]="['/becomeOwner']" routerLinkActive="active">Become Owner</a>
                    <router-outlet></router-outlet>

     `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        HTTP_PROVIDERS,
        ]
})

export class AppComponent {
s
}