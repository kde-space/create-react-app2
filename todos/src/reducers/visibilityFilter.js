import { 
  SET_VISIBILITY_FILTER,
  visibilityFilter 
} from '../actions';

function setVisibilityFilter(state = visibilityFilter.SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload.filter;
    default:
      return state;
  }
}

export default setVisibilityFilter