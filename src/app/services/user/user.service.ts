import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// import { User } from 'types/user';
import User from 'store/models/user.model';

import { MessageService } from 'services/message';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private messageService: MessageService) { }

  getUser(): Observable<User[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of({});
  }
}
