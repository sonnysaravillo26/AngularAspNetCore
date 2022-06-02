import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PeopleComponent} from './people/people.component';

const routes: Routes = [
  {path: 'people', component:PeopleComponent} // Added based on created component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
