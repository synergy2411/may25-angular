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
}

// Promise State
// - Pending
// - Settled > Fullfilled / Rejected
