import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartItemComponent } from './cart-item/cart-item.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { NavberComponent } from './navber/navber.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path : ' ' , redirectTo : 'login' , pathMatch: 'full' 
  },
  {
    path : 'login', component : LoginComponent
  },
  {
    path : 'signup' , component : SignupComponent

  },
  {
    path: 'home' , component : HomeComponent
  },
  {
    path: 'navber' , component : NavberComponent
  },
  {
    path: 'home-page' , component : MenuComponent
  },
  {
    path: 'cart-item' , component: CartItemComponent
  },
  {
    path: 'menu' , component : MenuComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
