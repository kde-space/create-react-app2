import { connect } from 'react-redux';
import TagDetail from '../components/TagDetail';

function mapStateToProps(state) {
  const { tagDatas, tags } = state;
  const { selectedTag } = tags;
  const {
    isFetching,
    isError,
    lastUpdated,
    responseData
  } = tagDatas[selectedTag];

  return {
    selectedTag,
    isFetching,
    isError,
    lastUpdated,
    responseData
  }
}

export default connect(mapStateToProps)(TagDetail);