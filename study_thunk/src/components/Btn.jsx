import React from 'react';
import styled from 'styled-components';

const Btn = ({ tag, children, fetchTagDataIfNeeded }) => {
  const handleClick = () => fetchTagDataIfNeeded(tag);
  return (
    <Wrapper>
      <ItemWrapper onClick={handleClick}>{children}</ItemWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  display: inline-block;
  & + & {
    margin-left: 10px;
  }
`;

const ItemWrapper = styled.button`
  padding: 5px 10px;
  color: #fff;
  font-size: 18px;
  border: none;
  border-radius: 3px;
  background-color: #222;
`;

export default Btn;