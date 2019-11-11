import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from '../resume-data.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  resumeData;

  constructor(private resumeDataService: ResumeDataService) { }

  getResumeData(): void {
    this.resumeData = this.resumeDataService.getResumeData();
  }

  ngOnInit() {
    this.getResumeData();
  }

}
