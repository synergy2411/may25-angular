import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrl: './pipe-example.component.css',
})
export class PipeExampleComponent {
  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data coming in future');
    }, 2000);
  });

  contactNumber = 9876543210;

  greetings = 'Hello there';

  todoCollection = [
    { label: 'shopping', status: 'pending' },
    { label: 'insurance', status: 'completed' },
    { label: 'planting', status: 'pending' },
    { label: 'grocery', status: 'completed' },
  ];

  filteredStatus = '';
}

// Promise State
// - Pending
// - Settled > Fullfilled / Rejected
