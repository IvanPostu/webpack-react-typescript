import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

export function storeInitializer() {
  const devMode: boolean = process.env.NODE_ENV === 'development';

  const store = createStore(
    rootReducer,
    devMode ? composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk),
  );

  return store;
}
