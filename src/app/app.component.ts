import { Component, inject } from '@angular/core';
import { ApiService } from './services/api.service';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  api = inject(ApiService);
  users: User[] = [];

  ngOnInit() {
    this.getUsers();
  }

  // Search for users
  getUsers(): void {
    this.api.getUsers().subscribe({
      next: (users) => {
        this.users = users.map(
          (user) => new User(user.id, user.name, user.username, user.email)
        );
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
