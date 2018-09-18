import { combineReducers } from '@ngrx/store';
import { addWalkReducer } from 'store/reducers/walk.reducer';

const reducers = {
  walk: addWalkReducer
};

export default reducers;
