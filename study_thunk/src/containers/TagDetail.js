import { connect } from 'react-redux';
import TagDetail from '../components/TagDetail';

function mapStateToProps(state) {
  const { tagDatas, tags } = state;
  return {
    selectedTag: tags.selectedTag,
    tagDatas
  }
}

export default connect(mapStateToProps)(TagDetail);