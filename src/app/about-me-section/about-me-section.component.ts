import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me-section',
  templateUrl: './about-me-section.component.html',
  styleUrls: ['./about-me-section.component.scss']
})


export class AboutMeSectionComponent implements OnInit {
  sectionName = "About Me";
  sectionText: string[] = [];
  curly_open = ' {';
  curly_close = '}';

  constructor() {
    this.sectionText = ["I'm Marco Domingues, a programmer from Portugal, with a passion for turning complex challenges into simple solutions. With a rich background in the world of software development, I've honed my skills in various programming languages, frameworks, and technologies.\n",
      "As an objective and detail-oriented person, I embrace a systematic and strategic approach to my work. Every line of code I write is meticulously planned, tested, and refined to ensure top-notch performance and reliability. I take pride in my ability to break down intricate problems into manageable tasks, making progress with clarity and precision.\n",
      "As a firm believer in continuous learning, I am always open to exploring new challenges that further develop my skill set. For me, programming is not just a profession. It's a passion that fuels my drive to conquer even the most complex challenges.\n",
      "Whether you're a  programmer, a tech enthusiast, or an organization seeking innovation, I welcome you to explore my GitHub. I have both finished and ongoing projects that exemplify my expertise.\n"
  ]
    }


  ngOnInit(): void {
  }

}
