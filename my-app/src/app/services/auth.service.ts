import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  verifiedUsers: Array<{ username: string; password: string }> = [
    { username: 'test@test.com', password: 'test!123' },
  ];

  isAuthenticated = false;

  constructor(private router: Router) {}

  registerUser(username: string, password: string) {
    // XHR call to register the user
    this.verifiedUsers.push({ username, password });
    setTimeout(() => {
      console.log('User registered successfully!');
      this.router.navigateByUrl('/login');
    }, 1500);
  }

  loginUser(username: string, password: string) {
    // XHR Call to verify user credentials
    const position = this.verifiedUsers.findIndex(
      (user) =>
        user.username.toLowerCase() === username.toLowerCase() &&
        user.password === password
    );
    if (position >= 0) {
      setTimeout(() => {
        this.isAuthenticated = true;
        console.log('User verified successfully!');
        this.router.navigateByUrl('/expenses');
      }, 1000);
    }
  }

  isUserAuthenticated() {
    return this.isAuthenticated;
  }

  logoutUser() {
    this.isAuthenticated = false;
  }
}
