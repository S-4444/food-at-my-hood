import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOfMenuItemsComponent } from './list-of-menu-items/list-of-menu-items.component';
// import { ShowAllComponent } from './show-all/show-all.component';
// import { BreakfastComponent } from './breakfast/breakfast.component';
// import { LunchComponent } from './lunch/lunch.component';
// import { DinnerComponent } from './dinner/dinner.component';
import { FooditemimgComponent } from './fooditemimg/fooditemimg.component';

@NgModule({
  declarations: [
    AppComponent,
    ListOfMenuItemsComponent,
    // ShowAllComponent,
    // BreakfastComponent,
    // LunchComponent,
    // DinnerComponent,
    FooditemimgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
