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

  startTime: Time;
  submissionTimes: Time[] = []; // You did not have your submissionTimes array set equal to an empty array. I have it set up here

  ngOnInit(): void {
  }

  submitScores(form: NgForm) {
    this.startTime = form.value.start;
    this.submissionTimes.push(form.value.qTime);
    console.log(this.submissionTimes); // Added for testing purposes
    this.score = this.calculateTotal();
  }

  addTimesToArray(form: NgForm){
    this.submissionTimes.push(form.value.qTime);
    // console.log(this.submissionTimes); // Added for testing purposes
    this.questionNum++;
  }

  calculateTotal(): number {
      let result = 0;
      // There should be another check to determine whether or not any of the values in the submissionTimes array is undefined
      if (this.submissionTimes === undefined || this.submissionTimes.length === 0) {
          return -1;
      } else {
          for (const i of this.submissionTimes) {
            // console.log(this.getHoursMinutes(this.startTime));
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
      // console.log(submitTime, submitTime.hours);
      const hours = submitArray[0] - startArray[0];
      const minutes = submitArray[1] - startArray[1];

      totalMinutes = (hours / 60) + minutes;
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
