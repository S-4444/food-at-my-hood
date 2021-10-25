import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { FooditemimgComponent } from './fooditemimg/fooditemimg.component';
 

const routes: Routes = [
  {path:'homeimg',component:FooditemimgComponent},
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
