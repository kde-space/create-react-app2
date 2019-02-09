import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import * as Actions from './actions';

const store = configureStore();

store.dispatch(Actions.fetchTags())
  .then(async () => {
    store.dispatch(Actions.selectTag('react'));
    await store.dispatch(Actions.fetchTagDataIfNeeded('react'));
    await store.dispatch(Actions.fetchTagDataIfNeeded('react'));
    store.dispatch(Actions.selectTag('vue'));
    await store.dispatch(Actions.fetchTagDataIfNeeded('vue'));
    await store.dispatch(Actions.fetchTagDataIfNeeded('vue'));
    // await store.dispatch(Actions.fetchTagDataIfNeeded('vue'));
    // store.dispatch(Actions.refreshTagData('vue'));
    // await store.dispatch(Actions.fetchTagDataIfNeeded('vue'));
  })

ReactDOM.render(<div>hello</div>, document.getElementById('root'));