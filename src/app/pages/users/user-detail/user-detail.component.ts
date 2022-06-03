import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../core/models/user.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  id: string;
  userDetail!: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.id = '';
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.userService
      .getUser(this.id)
      .subscribe((user) => (this.userDetail = { id: this.id, ...user }));
  }

  onUpdateUser(userData: User) {
    this.userService.updateUser(this.id, userData).subscribe(() => {
      this.router.navigate(['/users']);
    });
  }

  onClose() {
    this.router.navigate(['/users']);
  }
}
