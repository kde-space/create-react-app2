import { combineReducers } from 'redux';
import * as Actions from '../actions';

function selectedTag(state = '', action) {
  switch (action.type) {
    case Actions.SELECT_TAG:
      return action.payload.tag;
    default:
      return state;
  }
}

function tagsIsFetching(state = false, action) {
  switch (action.type) {
    case Actions.REQUEST_TAGS:
      return true;
    default:
      return false;
  }
}

function tagsIsError(state = {
  status: false,
  error: null
}, action) {
  switch (action.type) {
    case Actions.FAIL_REQUEST_TAGS:
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

function tags(state = {
  tagAll: [],
  isFetching: false,
  isError: {
    status: false,
    error: null
  },
  selectedTag: ''
}, action) {
  switch (action.type) {
    case Actions.REQUEST_TAGS:
      return {
        ...state,
        isFetching: tagsIsFetching(state.isFetching, action)
      };
    case Actions.RECEIVE_TAGS:
      return {
        ...state,
        tagAll: action.payload.response,
        isFetching: false
      };
    case Actions.SELECT_TAG:
      return {
        ...state,
        selectedTag: selectedTag(state.selectedTag, action)
      };
    case Actions.FAIL_REQUEST_TAGS:
      return {
        ...state,
        isError: tagsIsError(state.isError, action)
      };
    default:
      return state;
  }
}

function tagData(state = {
  isFetching: false,
  isError: {
    status: false,
    error: null
  },
  shouldUpdate: false,
  responseData: {}
}, action) {
  switch (action.type) {
    case Actions.REQUEST_TAG_DATA:
      return {
        ...state,
        isFetching: true,
        shouldUpdate: false
      };
    case Actions.RECEIVE_TAG_DATA:
      return {
        ...state,
        isFetching: false,
        lastUpdate: Date.now(),
        responseData: action.payload.response
      };
    case Actions.REFRESH_TAG_DATA:
      return {
        ...state,
        shouldUpdate: true
      };
    case Actions.FAIL_REQUEST_TAG_DATA:
      return {
        ...state,
        isFetching: false,
        isError: {
          status: true,
          error: action.payload.error
        }
      };
    default:
      return state;
  }
}

function tagDatas(state = {}, action) {
  switch (action.type) {
    case Actions.REQUEST_TAG_DATA:
    case Actions.RECEIVE_TAG_DATA:
    case Actions.REFRESH_TAG_DATA:
    case Actions.FAIL_REQUEST_TAG_DATA:
      return {
        ...state,
        [action.payload.tag]: tagData(state[action.payload.tag], action)
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  tags,
  tagDatas
});

export default rootReducer;