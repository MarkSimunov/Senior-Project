import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../services/questions.service';
import { map } from 'rxjs/operators'

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
        console.log(data);
        this.questions = data;
        console.log(this.questions);
        
      });
  }

}
