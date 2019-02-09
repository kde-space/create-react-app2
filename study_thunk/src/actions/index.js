import { API_GENRE, API_QIITA_TAGS } from '../define';

/**
 * Action type
 */
export const REQUEST_TAGS = 'REQUEST_TAGS';
export const RECEIVE_TAGS = 'RECEIVE_TAGS';
export const SELECT_TAG = 'SELECT_TAG';
export const REQUEST_TAG_DATA = 'REQUEST_TAG_DATA';
export const RECEIVE_TAG_DATA = 'RECEIVE_TAG_DATA';
export const REFRESH_TAG_DATA = 'REFRESH_TAG_DATA';
export const FAIL_REQUEST_TAGS = 'FAIL_REQUEST_TAGS';
export const FAIL_REQUEST_TAG_DATA = 'FAIL_REQUEST_TAG_DATA';

/**
 * Action Creator
 */
export const requestTags = () => ({
  type: REQUEST_TAGS
});

export const receiveTags = (json) => ({
  type: RECEIVE_TAGS,
  payload: {
    response: json
  }
});

export const selectTag = (tag) => ({
  type: SELECT_TAG,
  payload: {
    tag
  }
});

export const requestTagData = (tag) => ({
  type: REQUEST_TAG_DATA,
  payload: {
    tag
  }
});

export const receiveTagData = (tag, json) => ({
  type: RECEIVE_TAG_DATA,
  payload: {
    tag,
    response: json
  }
});

export const refreshTagData = (tag) => ({
  type: REFRESH_TAG_DATA,
  payload: {
    tag
  }
});

export const failRequestTags = (error) => ({
  type: FAIL_REQUEST_TAGS,
  error: true,
  payload: {
    error
  }
});

export const failRequestTagData = (tag, error) => ({
  type: FAIL_REQUEST_TAG_DATA,
  error: true,
  payload: {
    tag,
    error
  }
});

export const fetchTags = () => {
  return (dispatch) => {
    dispatch(requestTags());
    return fetch(API_GENRE)
      .then(res => {
        if (!res.ok) {
          return Promise.resolve(new Error(res.statusText));
        }
        return res.json();
      })
      .then(json => dispatch(receiveTags(json)))
      .catch(error => dispatch(failRequestTags(error)));
  }
};

const fetchTagData = (tag) => {
  return (dispatch) => {
    dispatch(requestTagData(tag));
    return fetch(API_QIITA_TAGS + tag)
      .then(res => {
        if (!res.ok) {
          return Promise.resolve(new Error(res.statusText));
        }
        return res.json();
      })
      .then(json => dispatch(receiveTagData(tag, json)))
      .catch(error => dispatch(failRequestTagData(tag, error)));
  }
}

const shouldFetchTagData = (tag, state) => {
  if (state.tagDatas[tag] === undefined || state.tagDatas[tag].shouldUpdate) {
    return true;
  }
  return false;
};

export const fetchTagDataIfNeeded = (tag) => {
  return (dispatch, getState) => {
    if (shouldFetchTagData(tag, getState())) {
      return dispatch(fetchTagData(tag));
    }
  }
};
