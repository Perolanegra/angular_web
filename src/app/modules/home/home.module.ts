import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent } from './home/home.component';
import { HomeService } from './home.service';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  providers: [ // Services
    HomeService
  ]
})
export class HomeModule { }
