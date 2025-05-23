import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StandaloneExample2Component } from '../standalone-example-2/standalone-example-2.component';

@Component({
  selector: 'app-standalone-example',
  standalone: true,
  imports: [CommonModule, FormsModule, StandaloneExample2Component],
  // templateUrl: './standalone-example.component.html',
  template: `
    <h1>{{ title }}</h1>
    <p>Admin : <span *ngIf="isAdmin">The user is admin</span></p>
    <input type="text" [(ngModel)]="title" />
    <app-standalone-example-2></app-standalone-example-2>
  `,
  styleUrl: './standalone-example.component.css',
})
export class StandaloneExampleComponent {
  title = 'Standalone component loaded';
  isAdmin = true;
}
