import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/Link';

// storeのstateを、プレゼンテーショナルコンポ―ネントにpropsに変換して渡す
const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

// ActionのDispatchをpropsに渡す
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  };
};

// コンテナコンポーネントはconnect関数によって最適されて作成される。
// connect関数にはmapStateToProps関数が必要になる。
const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;