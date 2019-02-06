import React from 'react';

const TodoItem = ({ onToggle, completed, text, id }) => {
  const handleOnClick = () => onToggle(id);
  return (
    <li
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
      onClick={handleOnClick}
    >
      {text}
    </li>
  );
};

export default TodoItem;