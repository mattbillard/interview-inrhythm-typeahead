import { applyMiddleware, combineReducers, createStore, } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { countriesReducer } from './reducer';

const rootReducer = combineReducers({ 
  countriesReducer
});

export type IStoreState = ReturnType<typeof rootReducer>;

export const configureStore = () => createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
