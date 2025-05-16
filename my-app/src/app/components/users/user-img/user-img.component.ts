import { Component, Input, EventEmitter, Output } from '@angular/core';
import { IUser } from '../../../models/user';

@Component({
  selector: 'app-user-img',
  templateUrl: './user-img.component.html',
  styleUrl: './user-img.component.css',
})
export class UserImgComponent {
  @Input() user!: IUser;

  @Output() childEvent = new EventEmitter();

  onClick() {
    this.childEvent.emit(this.user);
  }
}
