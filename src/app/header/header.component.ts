import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from '../resume-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  resumeData: ResumeData;

  constructor(private resumeDataService: ResumeDataService) { }

  getResumeData(): void {
    this.resumeData = this.resumeDataService.getResumeData();
  }

  ngOnInit() {
    this.getResumeData();
  }

}
