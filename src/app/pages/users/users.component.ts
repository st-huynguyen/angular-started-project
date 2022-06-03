import { Component, OnInit } from '@angular/core';
import { User } from '../../core/models/user.model';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  usersList: User[] = [];
  isLoading: boolean = false;
  isOpenForm: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.isLoading = true;
    this.userService.getUsers().subscribe((user) => {
      this.usersList = user;
      this.isLoading = false;
    });
  }

  onAddUser(userData: User) {
    this.isLoading = true;
    this.userService.createUser(userData).subscribe((resData) => {
      this.usersList.push({ id: resData.name, ...userData });
      this.isLoading = false;
    });
  }

  onDeleteUser(userId: string) {
    this.userService.deleteUser(userId).subscribe(() => {
      const newUsersList = this.usersList.filter((user) => user.id !== userId);
      this.usersList = newUsersList;
    });
  }

  onClose() {
    this.isOpenForm = false;
  }

  onOpen() {
    this.isOpenForm = true;
  }
}
