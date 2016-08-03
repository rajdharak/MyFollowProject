import { provideRouter, RouterConfig }  from '@angular/router';
import { OwnerComponent } from './owner/owner-form.component';

const routes: RouterConfig = [
    {
        path: 'owner',
        component: OwnerComponent
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];