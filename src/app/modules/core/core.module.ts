import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { CacheRouteReuseStrategy } from './cacheRouteReuse.strategy';
import { RestService } from './rest.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor } from './httpConfig.interceptor';
import { AppController } from './appController';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    AppController,
    RestService,
    { provide: RouteReuseStrategy, useClass: CacheRouteReuseStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ]
})
export class CoreModule { }
