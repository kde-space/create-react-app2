import React from 'react';
import styled from 'styled-components';
import Head from './Head';
import LastUpdate from './LastUpdate';
import RefreshLink from './RefreshLink';
import Details from './Details';
import { refreshTagData, fetchTagDataIfNeeded } from '../actions';

const TagDetails = ({ selectedTag, tagDatas, dispatch }) => {
  const selectedTagData = tagDatas[selectedTag];
  if (!selectedTagData) {
    return null;
  }
  const { isError, isFetching, lastUpdate, responseData } = selectedTagData;
  const onRefresh = () => {
    dispatch(refreshTagData(selectedTag));
    dispatch(fetchTagDataIfNeeded(selectedTag));
  };
  const hasResponseData = Object.keys(responseData).length > 0;

  return (
    <Wrapper>
      <Head tag={selectedTag} />
      {isFetching && !hasResponseData &&
        <Message>Now loading...</Message>
      }
      {isError.status && 
        <Message error>{isError.error.message}</Message>
      }
      <div style={{ opacity: isFetching ? 0.5 : 1 }}>
        {lastUpdate && 
          <LastUpdate lastUpdate={lastUpdate} />
        }
        <RefreshLink onClick={onRefresh} />
        {hasResponseData &&
          <Details {...responseData} />
        }
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Message = styled.p`
  color: ${props => props.error ? '#e00' : null};
`;


export default TagDetails;