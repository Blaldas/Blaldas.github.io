import { Component, Input, OnInit } from '@angular/core';
import { Education } from 'src/utils/models/section';

@Component({
  selector: 'app-education-section',
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.scss']
})
export class EducationSectionComponent implements OnInit {

  @Input() data: Education[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
