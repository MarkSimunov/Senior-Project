import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-scoring',
  templateUrl: './scoring.component.html',
  styleUrls: ['./scoring.component.css', '../app.component.css']
})
export class ScoringComponent implements OnInit {

  score: number;
  questionNum = 1;
  hide: boolean = false;
  scoreArray: number[] = [];
  displayedColumns: string[] = ['Questions Submitted', 'Current Score'];

  startTime: Time;
  submissionTimes: Time[] = [];

  ngOnInit(): void {
  }

  submitScores(form: NgForm) {
    if(!form.value.qTime) {
      window.alert("Must enter in time for question to be submitted at");
      return;
    }
    this.startTime = form.value.start;
    this.submissionTimes.push(form.value.qTime);
    if(this.calculateTotal() < 0) {
      window.alert("Start time cannot be less than time of answered question");
      this.submissionTimes.pop();
      return;
    }
    this.questionNum++;
    this.score = this.calculateTotal();
    this.scoreArray.push(this.score);
    console.log(this.scoreArray)
  }

  calculateTotal(): number {
      let result = 0;
      if (this.submissionTimes === undefined || this.submissionTimes.length === 0) {
          return -1;
      } else {
          for (const i of this.submissionTimes) {
            result += this.convertToMinutes(this.startTime, i);
          }
      }
      return result;
  }

  // Double check how well this works
  convertToMinutes(startTime: Time, submitTime: Time): number {
    const submitArray = this.getHoursMinutes(submitTime);
    const startArray = this.getHoursMinutes(startTime);
    let totalMinutes = 0;
    if (startTime == null || submitTime == null) {
      return 0;
    } else {
      const hours = submitArray[0] - startArray[0];
      const minutes = submitArray[1] - startArray[1];

      totalMinutes = (hours * 60) + minutes;
    }
    return totalMinutes;
  }

  // this can, in theory, be replaced with .hours/.minutes, however they are returning 'undefined'
  getHoursMinutes(time: Time): number[] {
    const timeArray: number[] = [];

    const timeSA = time.toString().split(':', 2);
    for (const item of timeSA){
      const no: number = Number(item);
      timeArray.push(no);
    }
    return timeArray;
  }

}
