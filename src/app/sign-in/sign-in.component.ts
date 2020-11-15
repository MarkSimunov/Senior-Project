import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../account.service';
import { User } from '../user';

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
    const value = form.value;
    const user = new User(value.email, value.passWord);
    console.log(user.email);
    console.log(user.password);
    this.accountService.signInUser(user);
  }

}
