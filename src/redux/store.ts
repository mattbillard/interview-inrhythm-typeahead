import { applyMiddleware, createStore, } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { app } from './reducer';

const rootReducer = app

export type IStoreState = ReturnType<typeof rootReducer>;

export const configureStore = () => createStore(
  rootReducer,
  // initialState,
  composeWithDevTools(applyMiddleware(thunk)),
);
