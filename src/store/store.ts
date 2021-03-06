import { createStore, combineReducers } from 'redux';
import AuthReducer from '@src/store/reducers/authentication';
import ThemeReducer from '@src/store/reducers/theme-context';

const reducers = combineReducers({
  authentication: AuthReducer,
  theme: ThemeReducer
});

export const store = createStore(reducers);