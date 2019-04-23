import { Action } from '@ngrx/store';
//import User from 'store/models/user.model';

export enum NavigationActionTypes {
  LOAD_MENU_STARTED = '[App Dashboard] Load Menu Started',
  LOAD_MENU_SUCCEEDED = '[App Dashboard] Load Menu Success',
}

export class NavigationLoadMenuStartedAction implements Action {
  readonly type = NavigationActionTypes.LOAD_MENU_STARTED;
  constructor(public payload: {}) {}
}

export class NavigationLoadMenuSucceededAction implements Action {
  readonly type = NavigationActionTypes.LOAD_MENU_SUCCEEDED;
  constructor(public payload: { menu: Array<Object> }) {}
}

export type NavigationActions = NavigationLoadMenuStartedAction;
