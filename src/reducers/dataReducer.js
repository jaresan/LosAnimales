import { fromJS } from 'immutable';
import Action from '../constants/actions';

const initialState = fromJS({
  species: [],
  animals: []
});

export default function(state = initialState, { type, payload }) {

  switch (type) {
    case Action.r_loadData:
      const {
        species,
        animals
      } = payload;

      state = state.set('animals', fromJS(animals));
      return state.set('species', fromJS(species));
    default:
      return state;
  }
}