import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'app-create-questions',
  templateUrl: './create-questions.component.html',
  styleUrls: ['./create-questions.component.css', '../app.component.css']
})
export class CreateQuestionsComponent implements OnInit {

  questionsArray = [];
  questionNum: number = 1;

  constructor(private questionsService: QuestionsService, private router: Router) { }

  ngOnInit(): void {
  }

  submitQuestions(form :NgForm) {
    this.questionsArray.push(form.value);
    this.questionsService.postQuestions(this.questionsArray)
      .subscribe(
        data => window.alert('Questions sucessfully submitted to database')
      );
      this.router.navigate(['/']);
  }

  addQuestionsToArray(form :NgForm){
    this.questionsArray.push(form.value);
    this.questionNum++;
  }

}
