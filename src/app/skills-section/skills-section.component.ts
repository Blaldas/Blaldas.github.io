import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss']
})
export class SkillsSectionComponent implements OnInit {

  @Input() data: string[] = [];
  
  sectionName = "Skills";
  curly_open = ' {';
  curly_close = '}';

  constructor() { }

  ngOnInit(): void {
  }

  getClassByIndex(i: number){
    if(i % 2 === 0){
      return 'sk_primary';
    }
    return 'sk_secundary';
  }

}
