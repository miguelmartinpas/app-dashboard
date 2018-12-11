import { Component, OnInit } from '@angular/core';
import { User } from 'types';
import { ApiService } from 'services/api';

class SettingField {
  name: string;
  type: string;
  visible: string;
  locked: boolean;
  value: any;
}

class SettingsGroup {
  fields: SettingField;
  visible: string;
  locked: boolean;
}

class Setting {
  login: SettingsGroup;
  permissions: SettingsGroup;
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.less']
})
export class SettingsComponent implements OnInit {
  private setting: Setting = { login: undefined, permissions: undefined };
  private apiService: ApiService;

  constructor(apiService: ApiService) {
    this.apiService = apiService;

    // https://www.uno-de-piera.com/aplicacion-angular-6-angularfire/
    // https://github.com/angular/angularfire2/blob/master/docs/rtdb/lists.md
    this.apiService.get('setting').snapshotChanges(['child_changed'])
      .subscribe(actions => {
        let setting: Setting = { login: undefined, permissions: undefined };
        actions.forEach(action => {
          setting = { ...setting, [action.key]: action.payload.val() };
        });
        this.setting = setting;
        console.log('setting', this.setting);
      });
  }

  getGroups = () => Object.keys(this.setting || {});

  ngOnInit() {
    console.log('onOnit', this.setting);
  }
}
