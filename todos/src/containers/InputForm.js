import { connect } from 'react-redux';
import Form from '../components/Form';
import { addTodo } from '../actions';

const mapToDispatchToProps = dispatch => ({
  onAddTodo: (text) => {
    dispatch(addTodo(text));
  }
});

export default connect(null, mapToDispatchToProps)(Form);