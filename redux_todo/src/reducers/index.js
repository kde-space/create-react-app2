import { 
  ADD_TODO, 
  TOGGLE_TODO, 
  SET_VISIBILITY_FILTER, 
  VisibilityFilters 
} from '../actions';

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
};

function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
     return {
       ...state,
       visibilityFilter: action.filter
     };
    default:
     return state;
  }
}