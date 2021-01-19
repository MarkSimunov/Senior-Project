import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'app-choose-questions',
  templateUrl: './choose-questions.component.html',
  styleUrls: ['./choose-questions.component.css', '../app.component.css']
})
export class ChooseQuestionsComponent implements OnInit {

  questions = [];

  constructor(private questionsService: QuestionsService) { }

  ngOnInit(): void {
    this.questionsService.getQuestions()
      .subscribe(data => this.questions = data);
  }

}
