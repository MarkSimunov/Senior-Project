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
  person: User;

  createAccount(form: NgForm) {
    const value = form.value;
    const user = new User(value.userName, value.passWord, true, this.id);
    // console.log(user.username);
    // console.log(user.password);
    // console.log(user.isAdmin);
    // console.log(user.id);
    this.accountService.createUser(user)
      .subscribe(
        data => {
          console.log('Success', data);
          localStorage.setItem('user', JSON.stringify(data));
          let item = JSON.parse(localStorage.getItem('user'));
        console.log(item);
        console.log(item.name);
        console.log(item.name.username);
        console.log(item.name.password);
        console.log(item.name.isAdmin);
        console.log(item.name.id);
        },
        error => console.error('Error', error)
      );
  }

  //Use checkbox for admin; admin must put in password for create account to be valid
}
