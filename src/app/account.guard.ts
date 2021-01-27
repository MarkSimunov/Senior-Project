import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AccountService } from './services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AccountGuard implements CanActivate {
  
  constructor(private accountService: AccountService, private router: Router) {

  }

  canActivate(): boolean {
    if (this.accountService.isLoggedIn) {
      this.router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }
  
}
