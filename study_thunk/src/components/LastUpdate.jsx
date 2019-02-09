import React from 'react';
import styled from 'styled-components';

const LastUpdate = ({ lastUpdate }) => {
  return (
    <Wrapper>
      最終更新日時: {new Date(lastUpdate).toLocaleTimeString()}
    </Wrapper>
  );
};

const Wrapper = styled.span`
  margin-right: 1em;
  font-size: 12px;
`;

export default LastUpdate;