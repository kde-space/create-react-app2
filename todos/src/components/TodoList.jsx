import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle}) => (
  <ul>
    {todos.map(todo => (
      <TodoItem
        key={todo.id}
        onToggle={onToggle}
        {...todo}
      />
    ))}
  </ul>
);

export default TodoList;