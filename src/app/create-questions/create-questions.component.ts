import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'app-create-questions',
  templateUrl: './create-questions.component.html',
  styleUrls: ['./create-questions.component.css', '../app.component.css']
})
export class CreateQuestionsComponent implements OnInit {

  questionsArray = [];
  questionNum: number = 1;

  constructor(private questionsService: QuestionsService) { }

  ngOnInit(): void {
  }

  submitQuestions(form :NgForm) {
    this.questionsArray.push(form.value);
    this.questionsService.postQuestions(this.questionsArray)
      .subscribe(
        data => window.alert('Questions submitted to database')
      )
  }

  addQuestionsToArray(form :NgForm){
    this.questionsArray.push(form.value);
    this.questionNum++;
  }

}
