import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Links from '../components/Links';

const mapStateToProps = ({ visibilityFilter }) => ({
  visibilityFilter
});

const mapDispatchToProps = dispatch => ({
  onSetVisibilityFilter: filter => {
    dispatch(setVisibilityFilter(filter));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Links);