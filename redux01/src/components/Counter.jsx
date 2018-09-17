import React from 'react';

const Counter = (props) => {
  const { value, onIncrement, onDecrement } = props;

  const incrementIfOdd = () => {
    if (value % 2 !== 0) {
      onIncrement();
    }
  }

  const incrementAsync = () => {
    setTimeout(onIncrement, 1000);
  }

  return (
    <p>
      Clicked: {value} times
      {' '}
      <button onClick={onIncrement}>+</button>
      {' '}
      <button onClick={onDecrement}>-</button>
      {' '}
      <button onClick={incrementIfOdd}>Increment if odd</button>
      <button onClick={incrementAsync}>Increment async</button>
    </p>
  );
}

export default Counter;