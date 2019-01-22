import { 
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  visibilityFilter 
} from '../actions';

const initialState = {
  visibilityFilter: visibilityFilter.SHOW_ALL,
  todos: []
};

function todoApp(state = initialState, action) {
  switch (action.type) {
  }
}