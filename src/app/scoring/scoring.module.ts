import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scoring',
  templateUrl: './scoring.component.html',
  styleUrls: ['./scoring.component.css', '../app.component.css']
})
export class ScoringComponent implements OnInit {

  scores: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  calculateOne(startTime, submissionTime): number {

  }

  calculateTotal(): number {
      let result = 0;
      if (this.scores === undefined || this.scores.length == 0) {
          return 0;
      } else {
          for(let i of this.scores) {
            result += i;
          }
      }
      return result;
  }


}