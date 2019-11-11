import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResumeDataService {

  constructor() { }

  getResumeData(): ResumeData {
    return RESUME_DATA;
  }

}

export class ResumeData {
  header: HeaderData;
  education: Education[];
  jobs: JobExperience[];
  footer: Footer;
}

export class HeaderData {
  //Header
  name: string;
  address: string;
  phone: string;
  email: string;
  description: string;
}

export class Education {
  name: string;
  description:string[];
}

export class JobExperience {
  title: string;
  date: string;
  companyName: string;
  description:string[];
}

export class Footer {
  note: string;
}

export const RESUME_DATA: ResumeData =  {
    header: {
      name: "Jason Liszka",
      address: "441 Hamburg Road, Greenville PA, 16125",
      phone: "(724)-877-2370",
      email: "jasonl8446@protonmail.com",
      description: "I am a computer science student who is skilled at using Linux who also has a strong foundation in mathematical thinking. I am seeking to find a job that allows me to apply my technical skills and knowledge. "
    },
    education: [
        {
          name: "Slippery Rock University, Slippery Rock, PA",
          description: [
            'GPA 3.5',
            'Major: Bachelors in Computer Science',
            'Minor: Professional Japanese',
            'Certificate: Japanese Studies',
            'Expected Graduation: Fall 2019',
            'Favorite Class: Linux Shell Scripting',
            'Extracurricular Project: Built a portable DNS spoof device using a Raspberry Pi '
          ]
        },
        {
          name: "Skills",
          description: [
            'Programming/Scripting languages most familiar with: C++, Java, JavaScript, Python, and Bash',
            'Very familiar with GNU/Linux in Bash shell environment',
            'Skilled with critical thinking, and complex mathematical thinking',
            'Experience with Web Development in three.js and angular'
          ]},
        {
          name: " Interests and Passions",
          description: [
            'Japanese Club President',
            'Participated in school visits to teach children about Japanese culture'
          ]
        }
    ],
    jobs: [
      {
        title: "Salesman",
        date: "July 2018 - August 2019",
        companyName: "Carried Away Outfitters, Greenville, PA",
        description: [
          'Rented kayaks, paddles boards and bikes.',
          'Sold kayaks, paddles boards and other related accessories.',
          'Fixed any IT related/computer related issues such as keeping their computers secure, fixing printers, etc.',
          'Created bike maps for company related events'
        ]
      },
      {
        title: "Land Surveying Assistant",
        date: "July 2017 – September 2017",
        companyName: "Sorg Surveying, Greenville, PA",
        description: [
          'Assisted in carrying equipment, setting up equipment, etc over long distances',
          'Measured dimensions of houses, barns, and other buildings'
        ]
      }
    ],
    footer: {
      note: "Created by Jason Liszka 2019"
    }
}
