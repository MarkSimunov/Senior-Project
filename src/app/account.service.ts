import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from './user';
import { Auth } from './auth';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { 

  }

  createUser(user: User) {
    return this.http.post('https://widenerprogrammingcontest.firebaseio.com/users.json', user);
  }

  getUser(auth: Auth) {
    return this.http.get('https://widenerprogrammingcontest.firebaseio.com/users.json')
  }
}
