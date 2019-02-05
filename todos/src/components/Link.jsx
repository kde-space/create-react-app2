import React from 'react';
import Hoge from '../containers/Hoge';

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>
  }
  return (
    <a
      href="###"
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      <Hoge />
      {children}
    </a>
  )
};

export default Link;