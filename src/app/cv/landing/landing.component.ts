import { Component, OnInit } from '@angular/core';
import { CVService } from "../cv.service";

import { Person } from "../models/person.model";

@Component({
  selector: 'cv-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  person: any;
  constructor(public cvService: CVService) { }

  ngOnInit() {
    this.getPersonInfo();
  }

  getPersonInfo() {
    this.cvService.getPersonInfo().subscribe((data) => {
      this.person = data;
    })
  }

}
