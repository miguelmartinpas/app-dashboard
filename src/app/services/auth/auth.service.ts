import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SuiModalService } from 'ng2-semantic-ui';
import { LoginModal } from 'components/login/login.component';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
// import Auth from 'store/models/auth.model';
// https://itnext.io/step-by-step-complete-firebase-authentication-in-angular-2-97ca73b8eb32
import { MessageService } from 'services/message';

type AuthType = 'password' | 'twitter' | 'facebook' | 'google';

interface AuthData {
  username: string;
  password: string;
  type: AuthType;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User;

  constructor(
    private modalService: SuiModalService,
    private messageService: MessageService,
    private firebaseAuth: AngularFireAuth,
    private router: Router
  ) {
    this.user = firebaseAuth.authState;

    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          console.log('userDETAILS: ', this.userDetails);
        } else {
          this.userDetails = null;
        }
      }
    );
  }

  modalSignIn = (): void => {
    this.modalService
      .open(new LoginModal())
      .onApprove((data: AuthData) => {
        console.log('onApprove', data);
        switch (data.type) {
          case 'twitter':
            this.signInWithTwitter();
            break;
          case 'facebook':
            this.signInWithFacebook();
            break;
          case 'google':
            this.signInWithGoogle();
            break;
          default:
            this.signIn(data.username, data.password);
        }
        // alert('User has accepted.'); console.log('modal > approve', data.type);
      })
      .onDeny(() => alert('User has denied.'));
  }

  signIn = (username: string, password: string) => {
    console.log('signIn', username, password);
    this.firebaseAuth.auth.signInWithEmailAndPassword(username, password).then((result) => {
      console.log('signIn', result);
    }).catch((error) => {
      console.log('>provider error>', error);
    });
  }

  signInWith = (provider = null) => {
    return this.firebaseAuth.auth.signInWithPopup(provider).then((result) => {
      console.log('signInWith', provider, result);
    }).catch((error) => {
      console.log('>provider error>', provider, error);
    });
  }

  signInWithTwitter = () => {
    return this.signInWith(new firebase.auth.TwitterAuthProvider());
  }

  signInWithFacebook = () => {
    return this.signInWith(new firebase.auth.FacebookAuthProvider());
  }

  signInWithGoogle = () => {
    return this.signInWith(new firebase.auth.GoogleAuthProvider());
  }

  isSignedIn = () => {
    if (this.userDetails == null ) {
      return false;
    } else {
      return true;
    }
  }

  signOut = () => {
    this.firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['/']));
  }
}
