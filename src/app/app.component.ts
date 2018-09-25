import { Component } from '@angular/core';
import { AuthService } from 'services/auth';
import { UserService } from 'services/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthService, private userService: UserService) {}
}
