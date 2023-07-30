import { Component, Input, OnInit } from '@angular/core';
import { Role, WorkXpSection } from 'src/utils/models/section';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  @Input() data: WorkXpSection[] = [];

  sectionName = "Work Experience";
  curly_open = ' {';
  curly_close = '}';

  constructor() { }

  ngOnInit(): void {
    this.processWorkXpRoleTasks();
  }

  processWorkXpRoleTasks() {
    this.data.forEach(job => {
      job.roles.forEach(role => {
        let tasks: string[] = [];

        role.tasks.forEach((task, index) => {
          tasks.push("// " + (index + 1) + "." + task);
        });

        role.tasks = tasks;
      });
    });
  }

  isLastRole = (title: WorkXpSection, role: Role)  => 
    title.roles[title.roles.length - 1].name !== role.name;


}
