import { Component } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'programming-competition';
  isSignedIn: boolean = false;
  constructor(public accountService: AccountService){

  }
  ngOnInit(){
    if(localStorage.getItem('user') !== null){
      this.isSignedIn = true;
    } else {
      this.isSignedIn = false;
    }
  }

  logout() {
    this.accountService.logout();
    this.isSignedIn = false;
  }
}

