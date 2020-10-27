import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css', '../app.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  username: string = '';
  password: string = '';

  createAccount() {
    console.log(this.username);
    console.log(this.password);

    // We will be sending http requests in this method to firebase; will do later
  }
}
