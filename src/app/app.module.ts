import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnSideMenuComponent } from './an-side-menu/an-side-menu.component';
import { AnBtnBurgerComponent } from './an-btn-burger/an-btn-burger.component';

@NgModule({
  declarations: [
    AppComponent,
    AnSideMenuComponent,
    AnBtnBurgerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
