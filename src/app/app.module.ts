import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './cv/header/header.component';
import { LandingComponent } from './cv/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
