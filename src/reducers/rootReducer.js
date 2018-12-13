import { combineReducers } from 'redux';
import animalReducer from './animalReducer';
import speciesReducer from './dataReducer';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
  animals: animalReducer,
  form: formReducer,
  data: speciesReducer
});