import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../services/questions.service';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-choose-questions',
  templateUrl: './choose-questions.component.html',
  styleUrls: ['./choose-questions.component.css', '../app.component.css']
})
export class ChooseQuestionsComponent implements OnInit {

  questionSets = [];
  questionsAmount: number;

  constructor(private questionsService: QuestionsService) { }

  ngOnInit(): void {
    this.questionsService.getQuestions()
      .pipe(map(responseData => {
        const postsArray = [];
        for (const key in responseData) {
          if(responseData.hasOwnProperty(key)) {
            postsArray.push({ ...responseData[key], id:key })
          }
        }
        return postsArray;
      }))
      .subscribe(data => {
        this.questionSets = data;
        console.log(this.questionSets);
        console.log(this.questionSets[0])
        this.questionsAmount = this.questionSets.length;
        console.log(this.questionsAmount)
      });
  }

}
