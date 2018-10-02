import { Action } from '@ngrx/store';
import { User } from 'store/models/user.model';

export enum UserActionTypes {
  USER_REQUEST = '[App Dashboard] User Request',
  USER_FAILURE = '[App Dashboard] User Failure',
  USER_SUCCESS = '[App Dashboard] User Success'
}

export class UserRequestAction implements Action {
  readonly type = UserActionTypes.USER_REQUEST;
  constructor(public payload: { date: Date; distance: number }) {}
}

export class UserFailureAction implements Action {
  readonly type = UserActionTypes.USER_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class UserSuccessAction implements Action {
  readonly type = UserActionTypes.USER_SUCCESS;
  constructor(public payload: { User: User }) {}
}

export type UserActions = UserRequestAction | UserFailureAction | UserFailureAction;
