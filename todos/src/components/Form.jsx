import React from 'react';

const Form = ({ onAddTodo }) => {
  let refInput = null;
  const handleSubmit = e => {
    e.preventDefault();
    if (!refInput.value.trim()) {
      return;
    }
    onAddTodo(refInput.value);
    refInput.value = '';
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={el => { refInput = el }} />
      <input type="submit" value="追加"/>
    </form>
  );
};

export default Form;