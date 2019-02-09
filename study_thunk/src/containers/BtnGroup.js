import { connect } from 'react-redux';
import BtnGroup from '../components/BtnGroup';

function mapStateToProps(state) {
  const { tagAll, isFetching, isError } = state.tags;
  return {
    tagAll,
    isFetching,
    isError
  };
}

export default connect(mapStateToProps)(BtnGroup);