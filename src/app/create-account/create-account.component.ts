import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../account.service';
import { User } from '../user';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css', '../app.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  id: number = Math.floor(Math.random() * Number.MAX_VALUE);

  createAccount(form: NgForm) {
    const value = form.value;
    const user = new User(value.userName, value.passWord, 'general', this.id);
    console.log(user.username);
    console.log(user.password);
    console.log('general');
    console.log(this.id);
    this.accountService.createUser(user)
      .subscribe(
        data => console.log('Success', data),
        error => console.error('Error', error)
      )
  }
}
