import { combineReducers } from '@ngrx/store';
import { addWalkReducer } from 'store/reducers/walk.reducer';
import { authReducer } from 'store/reducers/auth.reducer';
import { navigationReducer } from 'store/reducers/navigation.reducer';

const reducers = {
  walk: addWalkReducer,
  navigation: navigationReducer,
  auth: authReducer
};

export default reducers;
