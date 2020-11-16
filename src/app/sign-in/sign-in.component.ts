import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
import { User } from '../user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css', '../app.component.css']
})
export class SignInComponent implements OnInit {

  @Output() loggedIn = new EventEmitter();

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  signIn(form: NgForm) {
    const value = form.value;
    const user = new User(value.email, value.passWord);
    console.log(user.email);
    console.log(user.password);
    this.accountService.signInUser(user);
    this.loggedIn.emit();
    this.router.navigate(['/']);
  }
}
