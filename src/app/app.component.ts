import { Component, ElementRef } from '@angular/core';
import { ColorMode, getColor } from 'src/utils/colors/ColorsEngine';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  
constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {

    const backgoundColor = getColor('background_blue', ColorMode.dark);
    
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundColor = backgoundColor;
  }
}
