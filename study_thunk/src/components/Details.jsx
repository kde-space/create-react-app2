import React from 'react';
import styled from 'styled-components';

const Details = ({ followers_count, icon_url, items_count }) => (
  <Wrapper>
    <ItemWrapper>フォロワー数： {followers_count}</ItemWrapper>
    <ItemWrapper>アイコン画像： <Img src={icon_url} /></ItemWrapper>
    <ItemWrapper>記事数： {items_count}</ItemWrapper>
  </Wrapper>
);

const Wrapper = styled.ul`
  padding: 0;
  list-style-type: none;
`;

const ItemWrapper = styled.li`
  padding: 10px 20px;
  border-top: 1px solid #ccc;
  &:last-child {
    border-bottom: 1px solid #ccc;
  }
`;

const Img = styled.img`
  vertical-align: middle;
`;

export default Details;