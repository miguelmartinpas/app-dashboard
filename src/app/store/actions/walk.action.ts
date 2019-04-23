import { Action } from '@ngrx/store';
import { Walk } from 'store/models/walk.model';

export enum WalkActionTypes {
  WALK_REQUEST = '[My Feature] Walk Request',
  WALK_FAILURE = '[My Feature] Walk Failure',
  WALK_SUCCESS = '[My Feature] Walk Success'
}

export class WalkRequestAction implements Action {
  readonly type = WalkActionTypes.WALK_REQUEST;
  constructor(public payload: { date: Date; distance: number; games: number; }) {}
}

export class WalkFailureAction implements Action {
  readonly type = WalkActionTypes.WALK_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class WalkSuccessAction implements Action {
  readonly type = WalkActionTypes.WALK_SUCCESS;
  constructor(public payload: { walk: Walk }) {}
}

export type WalkActions = WalkRequestAction | WalkFailureAction | WalkFailureAction;
