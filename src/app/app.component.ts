import { Component } from '@angular/core';

import { SuiModalService } from 'ng2-semantic-ui';
import { LoginModal } from 'components/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public modalService: SuiModalService) {}

  public signIn(): void {
    this.modalService
      .open(new LoginModal())
      .onApprove((data: Object) => alert('User has accepted.', data))
      .onDeny(() => alert('User has denied.'));
  }
}
