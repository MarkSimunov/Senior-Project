import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from './user';
import { AngularFireAuth } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  isLoggedIn: boolean = false;

  constructor(public firebaseAuth: AngularFireAuth) { 

  }

  async createUser(user: User) {
    await this.firebaseAuth.createUserWithEmailAndPassword(user.email, user.password).then(
      res => {
        this.isLoggedIn = true;
        localStorage.setItem('user',JSON.stringify(res.user));
      }
    )
  }

  async signInUser(user: User) {
    await this.firebaseAuth.signInWithEmailAndPassword(user.email, user.password).then(
      res => {
        this.isLoggedIn = true;
        localStorage.setItem('user',JSON.stringify(res.user));
      }
    )
  }

  logout() {
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
    this.isLoggedIn = false;
  }

}
