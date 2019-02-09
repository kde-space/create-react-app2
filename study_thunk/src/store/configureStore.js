import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const logger = createLogger();
const middlewares = [thunk, logger];

export default function configureStore(pleloadState) {
  return createStore(
    rootReducer,
    pleloadState,
    applyMiddleware(...middlewares)
  );
};