﻿import { bootstrap }    from '@angular/platform-browser-dynamic';
import {EndUserStart} from './EndUsers/EndUserStart.component';
import { HTTP_PROVIDERS } from '@angular/http';
import {Service} from './Shared/Service';
import {OwnerRequest} from './Admin/OwnerList.component';
import {OwnerStart} from './Owners/OwnerStart.component';
import {appRouterProviders}from './app.route';
bootstrap(EndUserStart, [HTTP_PROVIDERS, Service, appRouterProviders]);
bootstrap(OwnerRequest, [HTTP_PROVIDERS, Service, appRouterProviders]);
bootstrap(OwnerStart, [HTTP_PROVIDERS, Service, appRouterProviders]);