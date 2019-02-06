import * as Actions from '../actions';

const { SHOW_ALL } = Actions.visibilityFilter;

export default function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case Actions.SET_VISIBILITY_FILTER:
      return action.payload.filter;
    default:
      return state;
  }
}