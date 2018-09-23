import User from 'store/models/user.model';
import { Action } from '@ngrx/store';
import { UserActionTypes } from 'store/actions/user.action';

export const userReducer = (user: User = {}, action) =>  {
  console.log('type', action);
  switch (action.type) {
    case UserActionTypes.LOGIN_REQUEST:
    console.log('payload', action.payload);
        return [...state, action.payload];
    default:
        return state;
    }
};
