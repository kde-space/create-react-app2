import React from 'react';
import styled from 'styled-components';

const Head = ({ tag }) => (
  <Wrapper>
    タグ「{tag}」の詳細情報
  </Wrapper>
);

const Wrapper = styled.h1`
  margin-bottom: 15px;
  font-size: 24px;
`;

export default Head;