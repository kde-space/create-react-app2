import React from 'react';

const Counter = (props) => {
  const onIncrementIfOdd = () => {
    if (props.value % 2 !== 0) {
      props.onIncrement();
    }
  };
  const onIncrementAsync = () => {
    setTimeout(() => {
      props.onIncrement();
    }, 1000);
  };

  return (
    <div>
      <p><strong>{props.value}</strong></p>
      <button onClick={props.onIncrement}>+</button>
      <button onClick={props.onDecrement}>-</button>
      <button onClick={onIncrementIfOdd}>incrementIfOdd</button>
      <button onClick={onIncrementAsync}>incrementAsync</button>
    </div>
  );
};

export default Counter;