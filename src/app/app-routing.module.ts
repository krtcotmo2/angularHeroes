import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroListComponent} from './HeroList/HeroList.component';
import { HeroesComponent } from './Heroes/Heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '',  redirectTo: '/dashboard',  pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroesComponent },
  { path: 'heroes', component: HeroListComponent },
  { path: 'other', component: HeroesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
