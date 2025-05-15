import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-img',
  templateUrl: './user-img.component.html',
  styleUrl: './user-img.component.css',
})
export class UserImgComponent {
  @Input() user: any;
}
