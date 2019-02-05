import { 
  SET_VISIBILITY_FILTER,
  visibilityFilter 
} from '../actions';

const { SHOW_ALL } = visibilityFilter;

function setVisibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload.filter;
    default:
      return state;
  }
}

export default setVisibilityFilter;