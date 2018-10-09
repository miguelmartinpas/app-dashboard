import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  LOAD_SETTING_STARTED = '[App Dashboard] Setting Started',
  LOAD_SETTING_SUCCEEDED = '[App Dashboard] Setting Success',
  SAVE_SETTING_STARTED = '[App Dashboard] Setting Started',
  SAVE_SETTING_SUCCEEDED = '[App Dashboard] Setting Success'
}

export class LoadSettingStartedAction implements Action {
  readonly type = AuthActionTypes.LOAD_SETTING_STARTED;
  constructor(public payload: {}) {}
}

export class LoadSettingSucceededAction implements Action {
  readonly type = AuthActionTypes.LOAD_SETTING_SUCCEEDED;
  constructor(public payload: { setting: Object }) {}
}

export class SaveSettingStartedAction implements Action {
  readonly type = AuthActionTypes.SAVE_SETTING_STARTED;
  constructor(public payload: { setting: Object }) {}
}

export class SaveSettingSucceededAction implements Action {
  readonly type = AuthActionTypes.SAVE_SETTING_SUCCEEDED;
  constructor(public payload: { setting: Object }) {}
}

export type SettingActions = LoadSettingStartedAction | LoadSettingSucceededAction | SaveSettingStartedAction | SaveSettingSucceededAction;
