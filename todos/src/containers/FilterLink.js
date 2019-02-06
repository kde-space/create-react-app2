import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/Link';

const mapStateToProps = ({ visibilityFilter }, ownProps) => ({
  isActive: visibilityFilter === ownProps.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSetVisibilityFilter: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);