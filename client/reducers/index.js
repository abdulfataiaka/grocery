import { combineReducers } from 'redux';
import global from './globalReducer';
import groceries from './groceriesReducer';

export default combineReducers({
  global,
  groceries
});
