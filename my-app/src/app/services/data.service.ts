import { Injectable } from '@angular/core';
import { USER_DATA } from '../models/mocks';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private users: IUser;

  constructor() {
    this.users = USER_DATA;
  }

  getUserdata() {
    return this.users;
  }
}
