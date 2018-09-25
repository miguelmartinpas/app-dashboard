import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import User from 'store/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User;
  private provider: any;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;

    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          this.provider = this.userDetails.providerData[0];
          console.log('parsed', this.parseFirebaseUser());
        } else {
          this.userDetails = null;
        }
      }
    );
  }

  private parseFirebaseUser = () => {
    return Object.keys(this.userDetails)
      .filter(key => key.length > 2 && !key.startsWith('_'))
      .reduce((acc, current) => {
        acc[current] = this.userDetails[current];
        return acc;
      } , {});
  }

  public getDisplayName = (): string => {
    return this.provider ? this.provider.displayName || this.provider.email : '';
  }

  public getPhotoUrl = (): string => {
    return this.provider ? this.provider.photoURL : '';
  }
}
