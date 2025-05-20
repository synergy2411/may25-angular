import { Component } from '@angular/core';
import { CounterService } from '../../../services/counter.service';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrl: './comp-b.component.css',
})
export class CompBComponent {
  constructor(public cs: CounterService) {}
}
