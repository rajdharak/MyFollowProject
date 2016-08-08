import { provideRouter, RouterConfig }  from '@angular/router';
import { OwnerFormComponent }from './Owner/owner-form.component';
const routes: RouterConfig = [{
    path: "becomeOwner",
    component: OwnerFormComponent,

}];
export const appRouterProviders = [
    provideRouter(routes)
];