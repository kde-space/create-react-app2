import React, { Component } from 'react';
import styled from 'styled-components';
import Btn from './Btn';
import {
  fetchTags,
  selectTag,
  fetchTagDataIfNeeded,
} from '../actions';

class BtnGroup extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchTags());
  }

  handleClick(tag) {
    const { dispatch } = this.props;
    dispatch(selectTag(tag));
    dispatch(fetchTagDataIfNeeded(tag));
  }

  render() {
    const { tagAll, isFetching, isError } = this.props;
    return (
      <Wrapper>
        {isFetching &&
          <Message>Now Loading...</Message>
        }
        {isError.status &&
          <Message>{isError.error.message}</Message>
        }
        {tagAll.length > 0 &&
          <React.Fragment>
            <ListHead>タグ：</ListHead>
            <ListWrapper>
              {tagAll.map(tag => <Btn key={tag} tag={tag} onClick={this.handleClick}>{tag}</Btn>)}
            </ListWrapper>
          </React.Fragment>
        }
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  padding: 10px;
  background-color: #eee;
`;

const Message = styled.p`
  margin: 0;
`;

const ListWrapper = styled.ul`
  display:inline-block;
  margin: 0;
  padding: 0;
`;

const ListHead = styled.h2`
  display: inline-block;
  margin: 0;
  padding: 0;
  line-height: 0;
  font-size: 18px;
`

export default BtnGroup;