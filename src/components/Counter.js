import React, { Component } from 'react';

class Counter extends Component {

  incrementScore = () => {
    this.setState((prevState) => {
      return {
        score: prevState.score + 1
      }
    });
  };

  decrementScore = () => {
    this.setState((prevState) => {
      return {
        score: prevState.score - 1
      }
    });
  };

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">{this.props.score}</span>
        <button className="counter-action increment"> + </button>
      </div>
    );
  }
}

export default Counter;