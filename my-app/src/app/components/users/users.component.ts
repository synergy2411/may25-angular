import { Component, OnInit } from '@angular/core';
import { IUser } from '../../models/user';
import { USER_DATA } from '../../models/mocks';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  user!: IUser;

  ngOnInit(): void {
    this.user = USER_DATA;
  }

  onMoreInfo(selectedUser: IUser) {
    alert(
      `Mr. ${selectedUser.lastName} is working with ${selectedUser.company}!`
    );
  }
}
