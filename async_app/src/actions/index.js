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

const fetchPosts = (subreddit) => {
  return (dispatch) => {
    dispatch(requestPosts(subreddit));
    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then(
        res => res.json(), 
        error => console.log('An error occurred.', error)
      )
      .then(json => dispatch(receivePosts(subreddit, json)));
  };
};

const shouldFetchPosts = (state, subreddit) => {
  const posts = state.postsBySubreddit[subreddit];
  if (!posts) {
    return true;
  }
  if (posts.isFetching) {
    return false;
  }
  return posts.didInvalidate;
};

export const fetchPostsIfNeeded = subreddit => {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), subreddit)) {
      return dispatch(fetchPosts(subreddit));
    }
    return Promise.resolve();
  };
};

