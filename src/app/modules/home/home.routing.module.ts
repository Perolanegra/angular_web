import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'src/app/shared/guards/auth.guard';
import { HomeComponent } from './home.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    {
        path: 'home',
        component: HomeComponent,
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
export class HomeRoutingModule { }
