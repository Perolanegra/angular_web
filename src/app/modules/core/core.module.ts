import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { CacheRouteReuseStrategy } from './cacheRouteReuse.strategy';
import { AppController } from './appController';


@NgModule({
  declarations: [],
  imports: [],
  providers: [
    AppController,
    // RestService
    {
      provide: RouteReuseStrategy,
      useClass: CacheRouteReuseStrategy
    }
  ]
})
export class CoreModule { }
