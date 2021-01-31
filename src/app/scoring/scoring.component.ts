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

  submissionTimes = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submitQuestions(form :NgForm) {
    this.submissionTimes.push(form.value);
 
  }

  addTimesToArray(form :NgForm){
    this.submissionTimes.push(form.value);
    this.questionNum++;
  }

  //update this
  calculateTotal(): number {
      let result = 0;
      if (this.submissionTimes === undefined || this.submissionTimes.length == 0) {
          return 0;
      } else {
          for(let i of this.submissionTimes) {
            result += i;
          }
      }
      return result;
  }


}