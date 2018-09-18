import { Component, OnInit } from '@angular/core';

import { Hero } from 'types/hero';
import { HeroService }  from 'services/hero';
import { MessageService } from 'services/message';

import AppState from 'store/appState';
import Walk from 'store/models/walk.model'
import { Store } from '@ngrx/store';

import { WalkRequestAction } from 'store/actions/walk.action';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(
    private heroService: HeroService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  addWalk() {
    this.store.dispatch(new WalkRequestAction({
      date: new Date(),
      distance: 10.4
    }));
  }

}
