import { Component } from '@angular/core';
import { ApiService } from 'services/api';
import { AuthService } from 'services/auth';
import { UserService } from 'services/user';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private apiService: ApiService;
  private authService: AuthService;
  private userService: UserService;
  private setting: Object;

  constructor (
    apiService: ApiService,
    authService: AuthService,
    userService: UserService
  ) {
    this.apiService = apiService;
    this.authService = authService;
    this.userService = userService;
  }
}
