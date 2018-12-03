import { combineReducers } from 'redux';
import animalReducer from './animalReducer';

export default combineReducers({
  animals: animalReducer
});