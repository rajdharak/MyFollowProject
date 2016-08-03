import { Component }         from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import './rxjs-operators';
@Component({
    selector: 'my-app',
    template:`

  <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <ul class='nav navbar-nav'>
                 <a [routerLink]="['/owner']" routerLinkActive="active">Become Owner</a>
                <router-outlet></router-outlet>
                </ul>
            </div>
        </nav>
     </div>
`,
    directives: [ROUTER_DIRECTIVES],
})
export class AppComponent {

} 