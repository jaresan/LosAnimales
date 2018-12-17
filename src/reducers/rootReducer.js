import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import userReducer from './userReducer';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
  form: formReducer,
  data: dataReducer,
  user: userReducer
});