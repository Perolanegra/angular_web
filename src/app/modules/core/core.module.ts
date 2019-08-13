import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { CacheRouteReuseStrategy } from './cacheRouteReuse.strategy';


@NgModule({
  declarations: [],
  imports: [],
  providers: [
    // AppController, GlobalVars, MainService
    {
      provide: RouteReuseStrategy,
      useClass: CacheRouteReuseStrategy
    }
  ]
})
export class CoreModule { }
