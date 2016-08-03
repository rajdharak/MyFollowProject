"use strict";
var router_1 = require('@angular/router');
var owner_form_component_1 = require('./owner/owner-form.component');
var routes = [
    {
        path: 'owner',
        component: owner_form_component_1.OwnerComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=route.js.map