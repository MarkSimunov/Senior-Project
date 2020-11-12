import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from './user';
import { Auth } from './auth';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { 

  }

  createUser(user: User) {
    return this.http.post('https://widenerprogrammingcontest.firebaseio.com/users.json', user);
  }

  loginUser(auth: Auth) {
    return this.http.get('https://widenerprogrammingcontest.firebaseio.com/users.json');
  }

  loggedIn() {
    return !!localStorage.getItem('user');
  }

  logoutUser() {
    localStorage.removeItem('user');
  }

  getUser() {
    return localStorage.getItem('user');
  }
  
}
