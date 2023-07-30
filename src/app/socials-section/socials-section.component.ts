import { Component, Input, OnInit } from '@angular/core';
import { Socials } from 'src/utils/models/section';

@Component({
  selector: 'app-socials-section',
  templateUrl: './socials-section.component.html',
  styleUrls: ['./socials-section.component.scss']
})
export class SocialsSectionComponent implements OnInit {

  @Input() data: Socials[] = [];

  sectionName = "Social Media";
  curly_open = ' {';
  curly_close = '}';

  constructor() { }

  ngOnInit(): void {
  }

  goToExternal(name: string){
    const link = this.data.filter(social => social.name === name ? social.link : false)[0].link;
    window.open(link);
  }


}
