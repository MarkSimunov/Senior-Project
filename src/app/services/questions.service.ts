import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IQuestion } from '../question';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  

  constructor(private http: HttpClient) { }

  postQuestions(questionsArray) {
    return this.http.post('https://widenerprogrammingcontest.firebaseio.com/posts.json', questionsArray);
  }

  getQuestions(): Observable<IQuestion[]> {
    return this.http.get<IQuestion[]>('https://widenerprogrammingcontest.firebaseio.com/posts.json');
  }
}
