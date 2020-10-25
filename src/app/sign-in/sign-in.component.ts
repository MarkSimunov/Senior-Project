import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css', '../app.component.css']
})
export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  username: string = '';
  password: string = '';

  signIn() {
    console.log(this.username);
    console.log(this.password);

    // We will be sending http requests in this method to firebase; will do later
  }

}
