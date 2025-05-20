import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-example',
  templateUrl: './observable-example.component.html',
  styleUrl: './observable-example.component.css',
})
export class ObservableExampleComponent {
  unSub$!: Subscription;

  obs$ = new Observable((observer) => {
    setTimeout(() => {
      observer.next('First Package');
    }, 500);
    setTimeout(() => {
      observer.next('Second Package');
    }, 1500);
    setTimeout(() => {
      observer.next('Third Package');
    }, 3000);

    setTimeout(() => {
      observer.error(new Error('Something went wrong'));
    }, 4000);

    setTimeout(() => {
      observer.complete();
    }, 5000);
  });

  onSubscribe() {
    console.log('Start');
    this.unSub$ = this.obs$.subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log('[COMPLETED]');
      },
    });
    console.log('End');
  }

  onUnsubscribe() {
    this.unSub$.unsubscribe();
  }
}
