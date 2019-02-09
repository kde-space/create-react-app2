import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import * as Actions from './actions';
import App from './components/App';

// import BtnGroup from './components/BtnGroup';

const store = configureStore();

// store.dispatch(Actions.fetchTags())
//   .then(async () => {
//     store.dispatch(Actions.selectTag('react'));
//     await store.dispatch(Actions.fetchTagDataIfNeeded('react'));
//     await store.dispatch(Actions.fetchTagDataIfNeeded('react'));
//     store.dispatch(Actions.selectTag('vue'));
//     await store.dispatch(Actions.fetchTagDataIfNeeded('vue'));
//     await store.dispatch(Actions.fetchTagDataIfNeeded('vue'));
//     store.dispatch(Actions.selectTag('react'));
//     await store.dispatch(Actions.fetchTagDataIfNeeded('react'));
//     // await store.dispatch(Actions.fetchTagDataIfNeeded('vue'));
//     // store.dispatch(Actions.refreshTagData('vue'));
//     // await store.dispatch(Actions.fetchTagDataIfNeeded('vue'));
//   })

render(
  <Provider store={store}>
    <App />
  </Provider>,
  // <BtnGroup tagAll={['react', 'vue']} onClick={() => console.log('aaa')}></BtnGroup>, 
  document.getElementById('root')
);