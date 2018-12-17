import { fromJS } from 'immutable';
import Action from '../constants/actions';

const initialState = fromJS({
  data: {},
  loggedIn: false,
  isAdmin: false
});

export default function(state = initialState, { type, payload }) {

  switch (type) {
    case Action.r_login:
      state = state.set('data', fromJS(payload));
      state.set('isAdmin', true);
      return state.set('loggedIn', true);
    default:
      return state;
  }
}