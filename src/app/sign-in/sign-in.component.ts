import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../account.service';
import { Auth } from '../auth';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css', '../app.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  signIn(form: NgForm) {

    //auth is not being used for the http request currently. This may be used if dealing with query params for get request
    const value = form.value;
    const auth = new Auth(value.userName, value.passWord);
    console.log(auth.username);
    console.log(auth.password);
    this.accountService.loginUser(auth)
      .subscribe(
        data => console.log(data)
      )
  }

}
