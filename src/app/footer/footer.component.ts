import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from '../resume-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  resumeData;

  constructor(private resumeDataService: ResumeDataService) { }

  getResumeData(): void {
    this.resumeData = this.resumeDataService.getResumeData();
  }

  ngOnInit() {
    this.getResumeData();
  }

}
