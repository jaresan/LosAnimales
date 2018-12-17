import { fromJS } from 'immutable';
import Action from '../constants/actions';
import { closeModal } from "../components/user/user";


const initialState = fromJS({
  data: fromJS({}),
  loggedIn: false,
  isAdmin: false,
  loginError: null,
  registerError: null
});

export default function(state = initialState, { type, payload }) {

  payload = payload || {};
  const { success, msg } = payload;
  switch (type) {
    case Action.logout:
      state = state.set('data', fromJS({}));
      state = state.set('isAdmin', false);
      state = state.set('loginError', null);
      state = state.set('registerError', null);
      return state.set('loggedIn', false);
    case Action.r_login:
      if (success) {
        closeModal();
        state = state.set('data', fromJS(payload.data));
        state = state.set('isAdmin', true);
        state = state.set('loginError', null);
        return state.set('loggedIn', true);
      }
      return state.set('loginError', msg);
    case Action.r_register:
      console.log(payload);
      if (success) {
        state = state.set('data', fromJS(payload.userData));
        state = state.set('isAdmin', false);
        state = state.set('registerError', null);
        return state.set('loggedIn', true);
      }
      return state.set('registerError', msg);
    default:
      return state;
  }
}