import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TeamlistComponent } from './teamlist/teamlist.component';
import { UpdateteamComponent } from './updateteam/updateteam.component';
import { NewteamComponent } from './newteam/newteam.component';


const routes: Routes = [
  { path: 'teams', component: TeamlistComponent },
  { path: 'update/:id', component: UpdateteamComponent },
  { path: 'new', component: NewteamComponent },
  { path: '', redirectTo: 'teams', pathMatch: 'full' },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
