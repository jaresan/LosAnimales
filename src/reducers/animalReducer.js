import { fromJS } from 'immutable';
import Action from '../constants/actions';

const initialState = fromJS({});

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case Action.r_loadAnimals:
      return state.set(payload.species, fromJS(payload.data));
    default:
      return state;
  }
};