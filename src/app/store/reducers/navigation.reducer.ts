import { fromJS } from 'immutable';
import { NavigationActionTypes } from 'store/actions/navigation.action';
// import NavigationService from 'services/navigation';

const initialState = fromJS({
  menu: [] // NavigationService.getSignOutMenu()
});

export const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case NavigationActionTypes.LOAD_MENU_SUCCEEDED:
      return state.set('menu', fromJS(action.payload));
    default:
      return state;
  }
};
