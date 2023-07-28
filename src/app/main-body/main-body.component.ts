import { Component, OnInit } from '@angular/core';
import { Education, Role, WorkXpSection } from 'src/utils/models/section';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.scss']
})
export class MainBodyComponent implements OnInit {

  title = 'Hello';
  subtitle_prefix = 'I\'m a'
  subtitle_role = 'Software Engineer';
  curly_open = '{';
  curly_close = '}';

  educationSection: Education[] = [];
  workXpSection: WorkXpSection[] = []

  constructor() {



    /*
        const workExp: Section = {
          title: "Work Experience",
          list: [{
            name: "Research Intern",
            date: "03/2021 - 09/2021",
          },
          {
            name: "Experienced Programmer",
            date: "11/2021 - Present",
          }],
        };
        this.data.push(workExp);
    
        const skills: Section = {
          title: "Skills",
          list: [
            "SQL",
            "Java",
            "Typescript"
          ],
        };
        this.data.push(skills);
    
        const publications: Section = {
          title: "Publications",
          list: [{
            name: "3iCubing: An Interval Inverted Index Approach to Data Cubes",
            link: "https://ieeexplore.ieee.org/document/9678346",
            text: "two data mining algorithms specialized in low memory consumption during the data representation phase"
          }]
        };
        this.data.push(publications);
    
        const socials: Section = {
          title: "Contacts",
          list: [{
            name: "GitHub",
            link: "github.com/blaldas/",
          },
          {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/marco-domingues-mk14v5-blaldas/",
          }]
        };
        this.data.push(socials);
    */
  }

  ngOnInit(): void {
    this.createEducationSectionData();
    this.createWorkXpSectionData();
  }
  createWorkXpSectionData() {
    const rolesList: Role[] =
      [{
        name: "Automation/Manual Tester",
        period: "11/2021 - Present",
        tasks: [
          "Developed and managed automatic tests to ensure product quality",
          "Communicated with client on issues, developed fixes and progress",
          "Defined story acceptance criteria with client",
          "Support the remainder elements of the test team in their tasks",
        ],
      },
      {
        name: "Full-Stack Developer",
        period: "09/2022 - Present",
        tasks: [
          "Worked as a developer on all areas, including infrastructure management",
          "Special focus on back-end and amcharts",
          "Active presence on meetings - special focus on refinements",
        ],
      }];


    this.workXpSection = [{
      title: "Experienced Programmer",
      place: "Deloitte Portugal",
      roles: rolesList,
    }];
  }

  createEducationSectionData() {
    //education
    this.educationSection.push({
      title: "Bachelor's Degree -  Computer Engineer",
      period: "09/2018 - 09/2021",
      place: "Polytechnic Institute of Coimbra",
      grade: "14",
    });
    this.educationSection.push({
      title: "Intern Researcher",
      period: "03/2021 - 09/2021",
      place: "Centre for Informatics and Systems of the University of Coimbra",
      grade: "19"
    });
  }

}
