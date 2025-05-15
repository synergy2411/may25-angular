import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  user = {
    firstName: 'bill',
    lastName: 'gates',
    isWorking: true,
    company: 'Microsoft',
    income: 50,
    dob: new Date('Dec 2, 1964'),
    imagePath: './assets/images/bill.jpeg',
    votes: 120,
  };

  onMoreInfo(selectedUser: any) {
    alert("Who's this?");
    console.log(selectedUser);
  }
}
