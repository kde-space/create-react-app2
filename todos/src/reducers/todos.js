import * as Actions from '../actions';

export default function todos(state = [], action) {
  switch (action.type) {
    case Actions.ADD_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false
        }
      ];
    case Actions.TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    default:
      return state;
  }
}