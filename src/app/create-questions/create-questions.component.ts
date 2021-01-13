import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-questions',
  templateUrl: './create-questions.component.html',
  styleUrls: ['./create-questions.component.css', '../app.component.css']
})
export class CreateQuestionsComponent implements OnInit {

  questionsArray = [];
  questionNum: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  submitQuestions() {
    if(this.questionsArray.length === 0) {
      window.alert("There must be at least one question");
    } else {
      
    }
  }

  addQuestionsToArray(form :NgForm){
    this.questionsArray.push(form.value);
    console.log(this.questionsArray);
    this.questionNum++;
  }

}
