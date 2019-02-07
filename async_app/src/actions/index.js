/**
 * Action
 */
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

/**
 * Action Creator
 */
export const selectSubreddit = (subreddit) => ({
  type: SELECT_SUBREDDIT,
  payload: {
    subreddit
  }
});

export const invalidateSubreddit = (subreddit) => ({
  type: INVALIDATE_SUBREDDIT,
  payload: {
    subreddit
  }
});

export const requestPosts = (subreddit) => ({
  type: REQUEST_POSTS,
  payload: {
    subreddit
  }
});

export const receivePosts = (subreddit, json) => ({
  type: RECEIVE_POSTS,
  payload: {
    subreddit,
    posts: json.data.children.map(child => child.data),
    receiveAt: Date.now()
  }
});


