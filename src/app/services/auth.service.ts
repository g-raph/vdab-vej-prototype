import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInKey = 'isLoggedIn';

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    if (username === 'vdab' && password === 'prototype') {
      sessionStorage.setItem(this.loggedInKey, 'true');
      return true;
    }
    return false;
  }
  
  logout() {
    sessionStorage.removeItem(this.loggedInKey);
    this.router.navigate(['/login']);
  }
  
  isLoggedIn(): boolean {
    return sessionStorage.getItem(this.loggedInKey) === 'true';
  }
}
