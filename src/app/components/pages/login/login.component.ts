import { Component, OnInit } from '@angular/core';
import { SuiModal, ComponentModalConfig, ModalSize } from 'ng2-semantic-ui';

// https://github.com/edcarroll/ng2-semantic-ui/blob/master/demo/src/app/modals/alert.modal.ts
interface ILoginModalContext {
    message?: string;
    username?: string;
    password?: string;
    type?: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginModalComponent {
  constructor(public modal: SuiModal<ILoginModalContext, Object, Object>) {}

  onUserPasswordClick = () => this.modal.approve(this.modal.context);

  onTwitterClick = () => {
    this.modal.context.type = 'twitter';
    return this.modal.approve(this.modal.context);
  }

  onFacebookClick = () => {
    this.modal.context.type = 'facebook';
    return this.modal.approve(this.modal.context);
  }

  onGoogleClick = () => {
    this.modal.context.type = 'google';
    return this.modal.approve(this.modal.context);
  }
}

export class LoginModal extends ComponentModalConfig<ILoginModalContext, void, void> {
    constructor(message?: string) {
        super(LoginModalComponent, { message, username: '', password: '', type: 'password' });

        this.transitionDuration = 500;
        this.size = ModalSize.Small;
    }
}
