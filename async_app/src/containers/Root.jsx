import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import AsyncApp from '../containers/AsyncApp';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <AsyncApp />
  </Provider>
);

export default Root;