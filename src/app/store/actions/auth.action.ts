import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  LOAD_PERMISSIONS_STARTED = '[App Dashboard] Permissions Started',
  LOAD_PERMISSIONS_SUCCEEDED = '[App Dashboard] Permissions Success',
  LOGIN_SUCCEEDED = '[App Dashboard] Login Success',
  LOGOUT_SUCCEEDED = '[App Dashboard] Logout Success'
}

export class AuthPermissionsStartedAction implements Action {
  readonly type = AuthActionTypes.LOAD_PERMISSIONS_STARTED;
  constructor(public payload: {}) {}
}

export class AuthPermissionsSucceededAction implements Action {
  readonly type = AuthActionTypes.LOAD_PERMISSIONS_SUCCEEDED;
  constructor(public payload: { permissions: Object }) {}
}

export class AuthLoginAction implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCEEDED;
  constructor(public payload: { user: string }) {}
}

export class AuthLogoutAction implements Action {
  readonly type = AuthActionTypes.LOGOUT_SUCCEEDED;
  constructor(public payload: {}) {}
}

export type AuthActions = AuthPermissionsStartedAction | AuthPermissionsSucceededAction | AuthLoginAction | AuthLogoutAction;
