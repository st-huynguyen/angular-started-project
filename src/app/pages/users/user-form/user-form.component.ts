import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  @Input() user!: User;
  @Input() isLoading!: boolean;
  @Output() onSubmit = new EventEmitter();
  @Output() onCancel = new EventEmitter();
  userForm!: FormGroup;
  name!: FormControl;
  age!: FormControl;

  constructor() {}

  ngOnInit(): void {
    (this.name = new FormControl(this.user?.name || '', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
    ])),
      (this.age = new FormControl(this.user?.age || '', [
        Validators.required,
        Validators.pattern(/^100|[1-9]?\d$/),
      ])),
      (this.userForm = new FormGroup({
        name: this.name,
        age: this.age,
      }));
  }

  handleSubmit() {
    this.onSubmit.emit(this.userForm.value);
    this.userForm.reset();
  }

  handleCancel() {
    this.onCancel.emit();
  }
}
