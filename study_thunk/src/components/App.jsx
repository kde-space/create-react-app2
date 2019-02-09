import React, { Component } from 'react';
import BtnGroup from '../containers/BtnGroup';
import TagDetail from '../containers/TagDetail';

class App extends Component {
  render() {
    return (
      <div>
        <BtnGroup />
        <TagDetail />
      </div>
    );
  }
};

export default App;