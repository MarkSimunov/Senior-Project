import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scoring',
  templateUrl: './scoring.component.html',
  styleUrls: ['./scoring.component.css', '../app.component.css']
})
export class ScoringComponent implements OnInit {

  score: number;
  questionNum: number = 1;

  startTime: Time;
  submissionTimes: Time[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submitScores(form :NgForm) {
    this.submissionTimes.push(form.value);
    this.score = this.calculateTotal();
  }

  addTimesToArray(form :NgForm){
    this.submissionTimes.push(form.value);
    this.questionNum++;
  }

  calculateTotal(): number {
      let result = 0;
      if (this.submissionTimes === undefined || this.submissionTimes.length == 0) {
          return -1;
      } else {
          for(let i of this.submissionTimes) {
            //temporary just to display SOMETHING
            result += 1;
            //result += this.getMinutes(this.startTime, i);
          }
      }
      return result;
  }

  //this can be so much simpler, this will be updated once everything else works
  /*
  getMinutes(startTime: Time, submitTime: Time): number {
    let minutes = 0;
    //Create new date objects so that we can subtract the two
    let start: Date = new Date(2020, 0O4, 0O2, startTime.hours, startTime.minutes, 0, 0);  
    let submit: Date = new Date(2020, 0O4, 0O2, submitTime.hours, submitTime.minutes, 0, 0); 
    
    //answer is in milliseconds, divide by 60000 to convert to minutes
    minutes = (submit.getTime() - start.getTime())/60000;

    return minutes;
  }
*/

}