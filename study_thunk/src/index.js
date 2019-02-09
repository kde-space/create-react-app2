import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import * as Actions from './actions';

const store = configureStore();

store.dispatch(Actions.fetchTags())
  .then(async () => {
    store.dispatch(Actions.selectTag('react'));
    await store.dispatch(Actions.fetchTagData('react'));
    store.dispatch(Actions.selectTag('vue'));
    await store.dispatch(Actions.fetchTagData('vue'));
    store.dispatch(Actions.refreshTagData('vue'));
    await store.dispatch(Actions.fetchTagData('vue'));
  })

ReactDOM.render(<div>hello</div>, document.getElementById('root'));