import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './shared/guards/auth.guard';
import { LoginComponent } from './modules/login/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [AuthGuardService]
  },
  {
    path: 'carrinho',
    loadChildren: './modules/carrinho/carrinho.module#CarrinhoModule',
    canActivate: [AuthGuardService]
  }
];
export const AppRoutingModule = RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload' });