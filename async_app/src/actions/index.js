/**
 * Actions
 */
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';

/**
 * Action Creator
 */
export function selectSubreddit(subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    payload: {
      subreddit
    }
  };
}

export function invalidateSubreddit(subreddit) {
  return {
    type: INVALIDATE_SUBREDDIT,
    payload: {
      subreddit
    }
  };
}

function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    payload: {
      subreddit
    }
  };
}

function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    payload: {
      subreddit,
      posts: json.data.children.map(child => child.data),
      receiveAt: Date.now()
    }
  };
}

function fetchPosts(subreddit) {
  return dispatch => {
    dispatch(requestPosts(subreddit));
    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then(res => res.json())
      .then(json => dispatch(receivePosts(subreddit, json)));
  };
}

function shouldFetchPosts(state, subreddit) {
  const posts = state.postsBySubreddit[subreddit];
  if (!posts) {
    return true;
  }
  if (posts.isFetching) {
    return false;
  }
  return posts.didInvalidate;
}

export function fetchPostsIfNeeded(subreddit) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), subreddit)) {
      return dispatch(fetchPosts(subreddit));
    }
  }
}

