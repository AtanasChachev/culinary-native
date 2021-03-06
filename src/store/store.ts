import { createStore, combineReducers } from 'redux';
import AuthReducer from '@src/store/reducers/authentication';

const reducers = combineReducers({
  authentication: AuthReducer
});

export const store = createStore(reducers);