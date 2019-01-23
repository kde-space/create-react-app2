import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  visibilityFilter
} from './actions';
import todoAppReducer from './reducers';

const store = createStore(todoAppReducer);
store.subscribe(() => console.log(store.getState()));

store.dispatch(addTodo('aaaa'));
store.dispatch(addTodo('bbbb'));
store.dispatch(addTodo('cccc'));
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));
store.dispatch(setVisibilityFilter(visibilityFilter.SHOW_ACTIVE));
store.dispatch(setVisibilityFilter(visibilityFilter.SHOW_COMPLETED));

ReactDOM.render(<div>hoge</div>, document.getElementById('root'));
