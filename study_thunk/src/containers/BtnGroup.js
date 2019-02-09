import { connect } from 'react-redux';
import BtnGroup from '../components/BtnGroup';
import { fetchTags, fetchTagDataIfNeeded } from '../actions';

function mapStateToProps(state) {
  const { tagAll, isFetching, isError } = state.tags;
  return {
    tagAll,
    isFetching,
    isError
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTags() {
      dispatch(fetchTags());
    },
    fetchTagDataIfNeeded(tag) {
      dispatch(fetchTagDataIfNeeded(tag))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BtnGroup);