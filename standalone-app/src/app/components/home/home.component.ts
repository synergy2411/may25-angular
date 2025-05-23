import { Component, signal, computed } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ReversePipe } from '../../pipes/reverse.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReversePipe, CommonModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = 'This is home page';
  counterSignal = signal(0);
  x = signal(2);
  y = signal(4);
  z = computed(() => this.x() + this.y());

  onIncrease() {
    this.counterSignal.update((count) => count + 1);
    this.x.update((val) => val + 2);
  }
}
