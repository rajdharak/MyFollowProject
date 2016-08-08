import { bootstrap }    from '@angular/platform-browser-dynamic';
import { appRouterProviders } from './route';
import { AppComponent } from './app.component';
import { HTTP_PROVIDERS } from '@angular/http';
bootstrap(AppComponent, [HTTP_PROVIDERS,appRouterProviders]);
