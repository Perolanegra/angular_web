import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'src/app/shared/guards/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },

    {
        path: 'inicio',
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
