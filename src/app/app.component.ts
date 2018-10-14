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
    // https://www.uno-de-piera.com/aplicacion-angular-6-angularfire/
    // https://github.com/angular/angularfire2/blob/master/docs/rtdb/lists.md
    this.apiService.get('setting').snapshotChanges(['child_changed'])
      .subscribe(actions => {
        let setting = {};
        actions.forEach(action => {
          setting = { ...setting, [action.key]: action.payload.val() };
        });
        this.setting = setting;
        console.log('setting', this.setting);
      });
  }
}
