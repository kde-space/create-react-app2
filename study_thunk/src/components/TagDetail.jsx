import React from 'react';
import styled from 'styled-components';
import Head from './Head';
import Date from './Date';
import RefreshLink from './RefreshLink';
import Details from './Details';

const TagDetails = ({ selectedTag, isFetching, isError, lastUpdate, responseData, onClick }) => {
  return (
    <Wrapper>
      <Head tag={selectedTag} />
      {isError.status && 
        <ErrorText>{isError.error}</ErrorText>
      }
      <div style={{ opacity: isFetching ? 0.5 : 1 }}>
        <Date lastUpdate={lastUpdate} />
        <RefreshLink onClick={onClick} />
        <Details {...responseData} />
      </div>
    </Wrapper>
  );
};

const ErrorText = styled.p`
  color: #e00;
`;

const Wrapper = styled.div``;

export default TagDetails;