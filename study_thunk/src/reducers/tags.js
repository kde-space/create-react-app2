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

/**
 * タグ一覧 のstateを管理するReducer
 */
export default function tags(state = {
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
        isFetching: tagsIsFetching(state.isFetching, action)
      };
    case Actions.SELECT_TAG:
      return {
        ...state,
        selectedTag: selectedTag(state.selectedTag, action)
      };
    case Actions.FAIL_REQUEST_TAGS:
      return {
        ...state,
        isError: tagsIsError(state.isError, action),
        isFetching: tagsIsFetching(state.isFetching, action)
      };
    default:
      return state;
  }
}