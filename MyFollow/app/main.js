"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var route_1 = require('./route');
var http_1 = require('@angular/http');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [route_1.appRouterProviders, http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=main.js.map