import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroListComponent} from './HeroList/HeroList.component';
import { HeroesComponent } from './Heroes/Heroes.component';


const routes: Routes = [
  { path: 'heroes', component: HeroListComponent },
  { path: 'other', component: HeroesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
