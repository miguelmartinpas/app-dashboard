import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SuiModalService } from 'ng2-semantic-ui';
import { LoginModal } from 'components/pages/login/login.component';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor() {}
}
