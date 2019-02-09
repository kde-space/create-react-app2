import React from 'react';
import styled from 'styled-components';

const Date = ({ lastUpdated }) => (
  <Wrapper>
    最終更新日時: {new Date(lastUpdated).toLocaleTimeString()}
  </Wrapper>
);

const Wrapper = styled.p`
  font-size: 12px;
`;

export default Date;