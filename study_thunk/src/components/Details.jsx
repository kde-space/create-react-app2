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
  padding: 10px;
`;

const ItemWrapper = styled.li`
  padding: 10px;
  &:not(:last-child) {
    boder-bottom: 1px solid #999;
  }
`;

const Img = styled.img``;

export default Details;