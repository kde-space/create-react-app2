/**
 * Actionを定義
 */
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const visibilityFilter = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/**
 * Action creatorを定義
 */
export const addTodo = text => {
  return {
    type: ADD_TODO,
    payload: {
      text
    }
  };
};

export const toggleTodo = index => {
  return {
    type: TOGGLE_TODO,
    payload: {
      index
    }
  };
};

export const setVisibilityFilter = filter => {
  return {
    type: SET_VISIBILITY_FILTER,
    payload: {
      filter
    }
  };
};

