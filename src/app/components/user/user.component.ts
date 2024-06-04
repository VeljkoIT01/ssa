import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  users: User[] = [];
  roles: string[] = [];
  filteredUsers: User[] = [];
  selectedRole: string | undefined;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getAllUsers();
    this.getUserRoles();
  }

  getAllUsers(): void {
    this.userService.getAllUsers().then(res => {
      this.users = res;
      this.filteredUsers = res;
    })
  }

  getUserRoles(): void {
    this.userService.getAllUsers().then(res => {
      this.roles = [... new Set(res.map(user => user.role))];
    })
  }

  onSelectRole(role: any): void {
    if(this.selectedRole == role) {
      this.selectedRole = undefined;
    } else {
      this.selectedRole = role;
    }

    this.filterUsers();
  }

  filterUsers(): void {
    if(this.selectedRole == undefined) {
      this.filteredUsers = this.users;
      return;
    } else {
      this.filteredUsers = this.users.filter(user => user.role == this.selectedRole);
    }
  }

}
