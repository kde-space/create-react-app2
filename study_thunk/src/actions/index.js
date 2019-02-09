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
export const FAIL_REQUEST = 'FAIL_REQUEST';

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

export const failRequest = (error) => ({
  type: FAIL_REQUEST,
  error: true,
  payload: {
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
      .catch(error => dispatch(failRequest(error)));
  }
};

export const fetchTagData = (tag) => {
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
      .catch(error => dispatch(failRequest(error)));
  }
}
