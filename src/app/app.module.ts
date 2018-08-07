import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './cv/header/header.component';
import { LandingComponent } from './cv/landing/landing.component';
import { AppRoutingModule } from './app-routing.module';
import { WorkComponent } from './cv/work/work.component';
import { EducationComponent } from './cv/education/education.component';
import { SkillsComponent } from './cv/skills/skills.component';
import { AchievmentsComponent } from './cv/achievments/achievments.component';
import { InterestComponent } from './cv/interest/interest.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    WorkComponent,
    EducationComponent,
    SkillsComponent,
    AchievmentsComponent,
    InterestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
