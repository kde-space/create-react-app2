import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

const logger = createLogger();
const middlewares = [thunk, logger];

export default function configureStore(preloadState) {
  return createStore(rootReducer, preloadState, applyMiddleware(...middlewares));
}