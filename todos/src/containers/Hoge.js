import React from 'react';
import { connect } from 'react-redux';

const Hoge = (props) => {
  console.log('This is Hoge.');
  console.log(props);
  return (
    <div>Hoge</div>
  );
};

const mapStateToProps = state => ({
  hoge: state.todos
});

export default connect(mapStateToProps)(Hoge);