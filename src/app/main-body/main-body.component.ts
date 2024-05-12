import { Component, OnInit } from '@angular/core';
import { Education, Publications, Role, Socials, WorkXpSection } from 'src/utils/models/section';

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
  skillsSection: string[] = [];
  publicationsSection: Publications[] = [];
  socialsSection: Socials[] = [];

  constructor() {}

  ngOnInit(): void {
    this.createEducationSectionData();
    this.createWorkXpSectionData();
    this.createSkillsStringData();
    this.createPublicationsSectionData();
    this.createSocialsSectionData()

  }

  createSocialsSectionData() {

    this.socialsSection = [
      {
        name: "GitHub",
        link: "https://github.com/blaldas/",
      },
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/marco-domingues-mk14v5-blaldas/",
      }
    ];
  }

  createPublicationsSectionData() {
    this.publicationsSection = [
      {
        title: "3iCubing: An Interval Inverted Index Approach to Data Cubes",
        link: "https://ieeexplore.ieee.org/document/9678346/",
        intro:
          "The increase in the amounts of information used to analyze data is problematic since the memory necessary to store and process it is getting quite big." +
          "In this paper, we propose two new data cubing algorithms: 3iCubing and M3iCubing." +
          "3iCubing is a Frag-Cubing-based algorithm that uses the interval inverted index representation, while M3iCubing uses both a normal and interval inverted index data representation."
      }
    ];

  }

  createSkillsStringData() {
    this.skillsSection = [
      'Java', 'Maven', 'Selenium', 'Cucumber', 'Protractor', 'Typescript', 'NodeJs', 'Angular',
      'AmCharts', 'HTML', 'SCSS/CSS', 'Cypress', 'Serverless', 'Terraform', 'Postman', 'Insomnia',
      'Git', 'SQL', 'BitBucket', 'Confluence', 'Jira', 'AWS', 'Jenkins', 'C', 'C++', 'JSON', 'Spring'
    ];
  }

  createWorkXpSectionData() {
    const deloitteRolesList: Role[] =
      [{
        name: "Automation/Manual Tester",
        period: "11/2021 - 07/2023",
        tasks: [
          "Developed and managed automatic tests to ensure product quality",
          "Communicated with client on issues, developed fixes and progress",
          "Defined story acceptance criteria with client",
          "Support the remainder elements of the test team in their tasks",
        ],
      },
      {
        name: "Full-Stack Developer",
        period: "11/2022 - 07/2023",
        tasks: [
          "Worked as a developer on all areas, including infrastructure management",
          "Special focus on back-end and amcharts",
          "Active presence on meetings - special focus on refinements",
        ],
      }];

      const nttDataRolesList: Role[] =
      [{
        name: "Senior Automation Specialist",
        period: "10/2023 - Present",
        tasks: [
          "Test planning, execution and reporting",
          "Technical support for the junior colleagues",
          "Team leadership tasks when required",
          "Mantainance, update and upgrade of a previously created test environment",
          "Development of tests to a new platform from the ground up - using and modifying an existing framework",
          "Technical validation for new hires"
        ],
      }];


    this.workXpSection = [{
      title: "Experienced Programmer",
      place: "Deloitte Portugal",
      roles: deloitteRolesList,
    },
    {
      title: "Testing Senior Specialist",
      place: "NTT DATA Portugal",
      roles: nttDataRolesList,
    }];
  }

  createEducationSectionData() {
    //education
    this.educationSection.push({
      title: "Bachelor's Degree - Computer Science and Engineering",
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
