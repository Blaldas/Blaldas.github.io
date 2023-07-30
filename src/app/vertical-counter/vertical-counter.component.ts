import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-counter',
  templateUrl: './vertical-counter.component.html',
  styleUrls: ['./vertical-counter.component.scss']
})
export class VerticalCounterComponent implements OnInit {

  counter: number[] = [];
  nLines: number = 72;

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < this.nLines; i++) {
      this.counter.push(i + 1);
    }
  }

}
