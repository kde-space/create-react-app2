import { combineReducers } from 'redux';

import { 
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  visibilityFilter 
} from '../actions';

function todos(state = [], action) {
  switch(action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.payload.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.payload.index) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    default:
      return state;
  }
}

function setVisibilityFilter(state = visibilityFilter.SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload.filter;
    default:
      return state;
  }
}

// function todoApp(state = initialState, action) {
//   return {
//     visibilityFilter: setVisibilityFilter(state.visibilityFilter, action),
//     todos: todo(state.todos, action)
//   };
// }

const todoApp = combineReducers({
  todos,
  visibilityFilter: setVisibilityFilter
});

export default todoApp;