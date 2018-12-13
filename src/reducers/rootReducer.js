import { combineReducers } from 'redux';
import animalReducer from './animalReducer';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
  animals: animalReducer,
  form: formReducer
});