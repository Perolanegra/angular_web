import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { AuthGuardService } from 'src/app/shared/guards/auth.guard';


const routes: Routes = [
    { path: '', redirectTo: 'meu-carrinho', pathMatch: 'full' },

    {
        path: 'meu-carrinho',
        component: CarrinhoComponent,
        resolve: {

        },
        canActivate: [AuthGuardService],
        runGuardsAndResolvers: 'always'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    // resolvers
  ]
})
export class CarrinhoRoutingModule { }
