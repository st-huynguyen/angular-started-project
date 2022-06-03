import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css'],
})
export class UserItemComponent implements OnInit {
  @Input() user!: User;
  @Output() onDeleteUser = new EventEmitter();
  disabled: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  deleteUser() {
    this.disabled = true;
    this.onDeleteUser.emit(this.user.id);
  }
}
