import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResumeDataService {

  constructor() { }

  getResumeData(): ResumeData {
    return RESUME_DATA;
  }

  getText(): string {
    return "Hello";
  }
}

export class ResumeData {
  header: HeaderData;
  //education: Education;
  //job: JobExperience;
  //footer: Footer;
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

export const RESUME_DATA: ResumeData = [
  {
    header: {
      name: "Jason Liszka",
      address: "441 Hamburg Road, Greenville PA, 16125",
      phone: "(724)-877-2370",
      email: "jasonl8446@protonmail.com",
      description: "I am a computer science student who is skilled at using Linux who also has a strong foundation in mathematical thinking. I am seeking to find a job that allows me to apply my technical skills and knowledge. "
    }
  }
]
