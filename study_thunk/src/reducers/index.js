import { combineReducers } from 'redux';
import * as Actions from '../actions';
import { Action } from 'rxjs/internal/scheduler/Action';

function tags(state = [], action) {
  switch (action.type) {
    case Actions.RECEIVE_TAGS:
      return action.payload.response;
    default:
      return state;
  }
}

function selectedTag(state = '', action) {
  switch (action.type) {
    case Actions.SELECT_TAG:
      return action.payload.tag;
    default:
      return state;
  }
}

function isFetching(state = false, action) {
  switch (action.type) {
    case Actions.REQUEST_TAGS:
    case Actions.REQUEST_TAG_DATA:
      return true;
    default:
      return false;
  }
}

function isError(state = {
  status: false,
  error: null
}, action) {
  switch (action.type) {
    case Actions.FAIL_REQUEST:
      return {
        ...state,
        status: true,
        error: action.payload.error
      };
    default:
      return {
        ...state,
        status: false,
        error: null
      };
  }
}

function tagDatas(state = {}, action) {
  switch (action.type) {
    case Actions.RECEIVE_TAG_DATA:
      return {
        ...state,
        [action.payload.tag]: {
          lastUpdated: Date.now(),
          responseData: action.payload.response
        }
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  tags,
  selectedTag,
  isFetching,
  isError,
  tagDatas
});

export default rootReducer;