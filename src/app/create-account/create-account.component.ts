import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../account.service';
import { User } from '../user';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css', '../app.component.css']
})
export class CreateAccountComponent implements OnInit {

  @Output() loggedIn = new EventEmitter();

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  createAccount(form: NgForm) {
    const value = form.value;
    const user = new User(value.email, value.passWord);
    console.log(user.email);
    console.log(user.password);
    this.accountService.createUser(user);
    this.loggedIn.emit();
  }
}
