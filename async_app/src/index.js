import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { selectSubreddit, fetchPostsIfNeeded } from './actions';
import rootReducer from './reducers';

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

store.dispatch(selectSubreddit('reactjs'));
store.dispatch(fetchPostsIfNeeded('reactjs'))
  .then(() => console.log(store.getState()))
  .then(() => {
    store.dispatch(selectSubreddit('vuejs'));
  })
  .then(() => {
    store.dispatch(fetchPostsIfNeeded('vuejs'))
      .then(() => console.log(store.getState()));
  }
)

ReactDOM.render(<div>Hello</div>, document.getElementById('root'));
