import { fromJS } from 'immutable';
import { AuthActionTypes } from 'store/actions/auth.action';
// import NavigationService from 'services/navigation';

const initialState = fromJS({
  permissions: {}, // NavigationService.getSignOutMenu()
  user: null,
  authenticated: false
});

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthActionTypes.LOAD_PERMISSIONS_SUCCEEDED:
      return state.set('permissions', fromJS(action.payload));
    case AuthActionTypes.LOGIN_SUCCEEDED:
      return state.merge({
        user: action.payload.user,
        authenticated: true
      });
    case AuthActionTypes.LOGOUT_SUCCEEDED:
      return state.merge({
        user: null,
        authenticated: false
      });
    default:
      return state;
  }
};
