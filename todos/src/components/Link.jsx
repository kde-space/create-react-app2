import React from 'react';
import styled from 'styled-components';

const Link = ({ onSetVisibilityFilter, isMatchFilter, filterName }) => {
  const Wrapper = isMatchFilter ? 
  styled.span`
    margin: 5px;
  ` : 
  styled.a`
    margin: 5px;
  `;

  if (isMatchFilter) {
    return <Wrapper>{filterName}</Wrapper>;
  }

  const handleClick = (e) => {
    e.preventDefault();
    onSetVisibilityFilter(filterName);
  };
  return (
    <Wrapper 
      href="##"
      onClick={handleClick}
    >
      {filterName}
    </Wrapper>
  );
};



export default Link;