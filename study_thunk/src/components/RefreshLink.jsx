import React from 'react';
import styled from 'styled-components';

const RefreshLink = ({ onClick }) => (
  <Wrapper href="#" onClick={onClick}>再読み込み</Wrapper>
);

const Wrapper = styled.a`
  font-size: 12px;
`;

export default RefreshLink;