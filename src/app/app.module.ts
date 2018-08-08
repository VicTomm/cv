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
import {MatButtonModule, MatProgressBarModule} from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressBarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
