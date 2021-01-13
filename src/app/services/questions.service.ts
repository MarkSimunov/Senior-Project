import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  

  constructor(private http: HttpClient) { }

  postQuestions(questionsArray) {
    return this.http.post('https://widenerprogrammingcontest.firebaseio.com/posts.json', questionsArray);
  }
}
