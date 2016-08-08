"use strict";
var router_1 = require('@angular/router');
var owner_form_component_1 = require('./Owner/owner-form.component');
var routes = [{
        path: "becomeOwner",
        component: owner_form_component_1.OwnerFormComponent,
    }];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=route.js.map