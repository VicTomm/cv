import { Component, OnInit } from '@angular/core';
import { CVService } from "../cv.service";
import { Subscription } from 'rxjs';

import { Works } from '../models/work.model';

@Component({
  selector: 'cv-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  works: Array<Works>;
  private worksSub: Subscription;
  constructor(public cvService: CVService) { }

  ngOnInit() {
    this.getWorks();
  }

  getWorks(){
    this.cvService.getWorkInfo();
    this.worksSub = this.cvService.getWorksUpdateListener().subscribe((works: Works[]) => {
      this.works = works;
    });
  }
}
