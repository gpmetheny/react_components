import React from 'react';

const Counter = (props) => {

  return (
    <div className="counter">
      <button
        className="counter-action decrement"
        onClick={() => props.changeScore(-1)}
      > - </button>
      <span className="counter-score">{props.score}</span>
      <button
        className="counter-action increment"
        onClick={() => props.changeScore(1)}
      > + </button>
    </div>
  );
};

export default Counter;