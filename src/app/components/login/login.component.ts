import { Component, OnInit } from '@angular/core';
import { SuiModal, ComponentModalConfig, ModalSize } from 'ng2-semantic-ui';

// https://github.com/edcarroll/ng2-semantic-ui/blob/master/demo/src/app/modals/alert.modal.ts
interface ILoginModalContext {
    title?: string;
    message?: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginModalComponent {
  constructor(public modal: SuiModal<ILoginModalContext, void, void>) {}
}

export class LoginModal extends ComponentModalConfig<ILoginModalContext, void, void> {
    constructor(title?: string, message?: string) {
        super(LoginModalComponent, { title, message });

        this.transitionDuration = 500;
        this.size = ModalSize.Small;
    }
}
