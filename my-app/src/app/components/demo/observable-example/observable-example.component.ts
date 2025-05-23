import { Component, OnDestroy } from '@angular/core';
import {
  AsyncSubject,
  Observable,
  Subscription,
  filter,
  from,
  interval,
  take,
} from 'rxjs';

@Component({
  selector: 'app-observable-example',
  templateUrl: './observable-example.component.html',
  styleUrl: './observable-example.component.css',
})
export class ObservableExampleComponent implements OnDestroy {
  unSub$!: Subscription;
  unsubInterval$!: Subscription;

  friends = ['Monica', 'Joey', 'Rachel', 'Ross'];

  fromFriends$ = from(this.friends);

  interval$ = interval(1000);

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

    // setTimeout(() => {
    //   observer.error(new Error('Something went wrong'));
    // }, 4000);

    setTimeout(() => {
      observer.complete();
    }, 5000);
  });

  onSubscribe() {
    this.unsubInterval$ = this.interval$
      .pipe(
        filter((value) => value % 2 === 0),
        take(5)
      )
      .subscribe(console.log);

    this.fromFriends$.subscribe({
      next: (data) => console.log(data),
      complete: () => {
        console.log('[FRIEDNS COMPLETED]');
      },
    });

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

  onSubjects() {
    // let subject = new Subject();
    // let subject = new BehaviorSubject('Starting the observable');
    // let subject = new ReplaySubject(2);
    let subject = new AsyncSubject();

    subject.next('First PAckage');
    subject.next('Second PAckage');

    subject.subscribe((data) => {
      console.log('Sub 1', data);
    });

    subject.next('Third PAckage');

    subject.subscribe((data) => {
      console.log('Sub 2', data);
    });

    subject.complete();
  }

  ngOnDestroy(): void {
    this.unsubInterval$.unsubscribe();
  }
}
