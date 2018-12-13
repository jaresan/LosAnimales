import { fromJS } from 'immutable';
import Action from '../constants/actions';

const initialState = fromJS({
  species: []
});

export default function(state = initialState, { type, payload }) {

  switch (type) {
    case Action.r_loadData:
      return state.set('species', fromJS(payload));
    default:
      return state;
  }
}