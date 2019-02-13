import * as Actions from '../actions';

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
        isError: {
          status: false,
          error: null
        },
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

/**
 * タグの詳細情報を管理するReducer
 */
export default function tagDatas(state = {}, action) {
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