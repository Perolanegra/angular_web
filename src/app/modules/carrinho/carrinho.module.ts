import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarrinhoRoutingModule } from './carrinho.routing.module';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CarrinhoService } from './carrinho.service';

@NgModule({
  imports: [
    SharedModule,
    CarrinhoRoutingModule
  ],
  declarations: [
    CarrinhoComponent
  ],
  exports: [
    CarrinhoComponent
  ],
  providers: [ // Services
    CarrinhoService
  ]
})
export class CarrinhoModule { }
