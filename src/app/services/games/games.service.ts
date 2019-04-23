import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';

// import { Hero } from 'types';
// import { HEROES } from 'mocks/mock-heroes';

import { MessageService } from 'services/message';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private messageService: MessageService) { }

  getRandomArbitrary(min: number, max: number) {
      return Math.random() * (max - min) + min;
  }

  shoot() {
      return this.getRandomArbitrary(1, 3);
  }

  play() {
      const shoot = this.shoot();
      this.messageService.add(shoot);
      return shoot;
  }

  // getHeroes(): Hero[] {
  //   this.messageService.add('HeroService: fetched heroes');
  //   return HEROES;
  // }
  //
  // getHero(id: number): Observable<Hero> {
  //   // TODO: send the message _after_ fetching the hero
  //   this.messageService.add(`HeroService: fetched hero id=${id}`);
  //   return of(HEROES.find(hero => hero.id === id));
  // }
}
