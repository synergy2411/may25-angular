import { Component } from '@angular/core';
import { ReversePipe } from '../../../pipes/reverse.pipe';

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

  onMouseEnter() {
    this.greetings = new ReversePipe().transform(this.greetings);
    // console.log(reverseStr);
    return this.greetings;
  }
}

// Promise State
// - Pending
// - Settled > Fullfilled / Rejected
