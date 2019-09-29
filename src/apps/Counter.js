import React from 'react';
import useCounter from '../custom-hooks/useCounter';

export default () => {
  const { count, increment, decrement } = useCounter(0);
  const incrementCounter = () => increment();
  const decrementCounter = () => decrement();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
    </div>
  );
};
