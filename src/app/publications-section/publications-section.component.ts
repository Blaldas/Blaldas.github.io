import { Component, Input, OnInit } from '@angular/core';
import { Publications } from 'src/utils/models/section';

@Component({
  selector: 'app-publications-section',
  templateUrl: './publications-section.component.html',
  styleUrls: ['./publications-section.component.scss']
})
export class PublicationsSectionComponent implements OnInit {

  @Input() data: Publications[] = [];

  sectionName = "Publications";
  curly_open = ' {';
  curly_close = '}';
  
  constructor() { 
    
  }

  ngOnInit(): void {
    this.addComments();
  }

  goToExternal(i: number){
    window.open(this.data[i].link);
  }

 addComments() {
    this.data.forEach(pub => {
      const lines = pub.intro.split('.');

      const commentedLines = lines.map(line => '// ' + line);
      //removes last line as is null
      commentedLines[commentedLines.length -1] = '';
      
      pub.intro = commentedLines.join('.\n');
    })
}

}

