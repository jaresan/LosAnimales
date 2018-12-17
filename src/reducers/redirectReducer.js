import { fromJS } from 'immutable';
import Action from '../constants/actions';

const initialState = fromJS({
  redirectTo: null
});

export default function(state = initialState, { type, payload }) {

  switch (type) {
    case Action.redirect:
      return state.set('redirectTo', fromJS(payload));
    default:
      return state;
  }
}