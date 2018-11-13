import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import immutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from '../reducers';

export default initialState => createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk, immutableStateInvariant())
);
