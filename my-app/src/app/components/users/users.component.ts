import { Component, OnInit } from '@angular/core';
import { IUser } from '../../models/user';
import { DataService } from '../../services/data.service';
// import { USER_DATA } from '../../models/mocks';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
  // providers:[DataService]
})
export class UsersComponent implements OnInit {
  user!: IUser;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // this.user = USER_DATA;
    this.user = this.dataService.getUserdata();
  }

  onMoreInfo(selectedUser: IUser) {
    alert(
      `Mr. ${selectedUser.lastName} is working with ${selectedUser.company}!`
    );
  }
}
