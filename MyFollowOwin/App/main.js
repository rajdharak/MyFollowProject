"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var EndUserStart_component_1 = require('./EndUsers/EndUserStart.component');
var http_1 = require('@angular/http');
var Service_1 = require('./Shared/Service');
var OwnerList_component_1 = require('./Admin/OwnerList.component');
var OwnerStart_component_1 = require('./Owners/OwnerStart.component');
var app_route_1 = require('./app.route');
platform_browser_dynamic_1.bootstrap(EndUserStart_component_1.EndUserStart, [http_1.HTTP_PROVIDERS, Service_1.Service, app_route_1.appRouterProviders]);
platform_browser_dynamic_1.bootstrap(OwnerList_component_1.OwnerList, [http_1.HTTP_PROVIDERS, Service_1.Service, app_route_1.appRouterProviders]);
platform_browser_dynamic_1.bootstrap(OwnerStart_component_1.OwnerStart, [http_1.HTTP_PROVIDERS, Service_1.Service, app_route_1.appRouterProviders]);
//# sourceMappingURL=main.js.map