import React from 'react';
import styled from 'styled-components';

const Link = ({ onSetVisibilityFilter, isActive, children }) => {
  const Wrapper = isActive ? 
  styled.span`
    margin: 5px;
  ` : 
  styled.a`
    margin: 5px;
  `;

  if (isActive) {
    return <Wrapper>{children}</Wrapper>;
  }

  const handleClick = (e) => {
    e.preventDefault();
    onSetVisibilityFilter();
  };
  return (
    <Wrapper 
      href="##"
      onClick={handleClick}
    >
      {children}
    </Wrapper>
  );
};



export default Link;