import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonsterCardComponent } from './monster-card/monster-card.component';

const routes: Routes = [
  { path: 'monsterCard', component: MonsterCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
