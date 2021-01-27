import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { User } from '../user';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css', '../app.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  createAccount(form: NgForm) {
    const value = form.value;
    const user = new User(value.email, value.passWord);
    if (value.email.includes('widener.edu')) {
      this.accountService.createUser(user);
      setTimeout(() => this.router.navigate(['/']), 2000);
    } else {
      window.alert('Must include valid email address');
    }
    
  }
}
