import { Component } from '@angular/core';
import { CounterService } from '../../../services/counter.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrl: './comp-a.component.css',
})
export class CompAComponent {
  constructor(public cs: CounterService) {}
  onIncrease() {
    this.cs.counter++;
  }
}
