import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import * as Actions from '../actions';

const { toggleTodo } = Actions;
const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = Actions.visibilityFilter;

const mapStateToProps = ({ todos, visibilityFilter }) => ({
  todos: (() => {
    switch (visibilityFilter) {
      case SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
      case SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
      case SHOW_ALL:
      default:
        return todos;
    }
  })()
});

// const mapDispatchToProps = dispatch => (
//   bindActionCreators({ toggleTodo }, dispatch)
// );

const mapDispatchToProps = dispatch => ({
  onToggle: id => {
    dispatch(toggleTodo(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);