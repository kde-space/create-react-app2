import { createStore } from 'redux';
import todoApp from './reducers';
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from './actions';

const store = createStore(todoApp);

// 初期状態のログを取る
console.log(store.getState());

// 状態が変化するたびにログを取る
// subscribe()はリスナーを登録解除するための関数を返す
const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(addTodo('起きる'));
store.dispatch(addTodo('顔を洗う'));
store.dispatch(addTodo('朝御飯を食べる'));
store.dispatch(toggleTodo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
unsubscribe();
store.dispatch(addTodo('歯を磨く'));

