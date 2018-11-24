import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'POCAnglGrid',loadChildren:'./core modules/POC_AnglGrid-module/POC_AnglGrid.module#POC_AngGridModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
