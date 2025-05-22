import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseApp, initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  Auth,
} from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // verifiedUsers: Array<{ username: string; password: string }> = [
  //   { username: 'test@test.com', password: 'test!123' },
  // ];

  isAuthenticated = false;

  private firebaseApp: FirebaseApp;
  private auth!: Auth;
  private token: string = '';

  constructor(private router: Router) {
    this.firebaseApp = initializeApp({
      apiKey: 'AIzaSyB_k2rEBHPhHHwXnJhRqfOdNHmWTs8A4Zg',
      authDomain: 'sk-ng-may-25.firebaseapp.com',
    });
  }

  async registerUser(username: string, password: string) {
    this.auth = getAuth(this.firebaseApp);

    try {
      const userCredentials = await createUserWithEmailAndPassword(
        this.auth,
        username,
        password
      );
      console.log(userCredentials);
      this.router.navigateByUrl('/login');
    } catch (err) {
      console.log(err);
    }

    // XHR call to register the user
    // this.verifiedUsers.push({ username, password });
    // setTimeout(() => {
    //   console.log('User registered successfully!');
    //   this.router.navigateByUrl('/login');
    // }, 1500);
  }

  async loginUser(username: string, password: string) {
    // Firebase Login
    this.auth = getAuth(this.firebaseApp);

    try {
      const userCredentials = await signInWithEmailAndPassword(
        this.auth,
        username,
        password
      );

      this.token = await userCredentials.user.getIdToken();
      this.router.navigateByUrl('/expenses');
    } catch (err) {
      console.log(err);
    }

    // XHR Call to verify user credentials
    // const position = this.verifiedUsers.findIndex(
    //   (user) =>
    //     user.username.toLowerCase() === username.toLowerCase() &&
    //     user.password === password
    // );
    // if (position >= 0) {
    //   setTimeout(() => {
    //     this.isAuthenticated = true;
    //     console.log('User verified successfully!');
    //     this.router.navigateByUrl('/expenses');
    //   }, 1000);
    // }
  }

  isUserAuthenticated() {
    return this.token.trim() !== '';
    // return this.isAuthenticated;
  }

  logoutUser() {
    this.isAuthenticated = false;
  }

  getToken() {
    return this.token;
  }
}
