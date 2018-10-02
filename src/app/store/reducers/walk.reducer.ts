import { Walk } from 'store/models/walk.model';
import { Action } from '@ngrx/store';
import { WalkActionTypes } from 'store/actions/walk.action';

export const addWalkReducer = (state: Walk[] = [], action) =>  {
  console.log('type', action);
  switch (action.type) {
    case WalkActionTypes.WALK_REQUEST:
    console.log('payload', action.payload);
        return [...state, action.payload];
    default:
        return state;
    }
};
