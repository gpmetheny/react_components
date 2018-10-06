import React, { Component } from 'react';
import Header from './Header';
import '../App.css';

class App extends Component {
  state = {
    players: [
      {
        name: 'Guil',
        id: 1
      },
      {
        name: 'Treasure',
        id: 2
      },
      {
        name: 'Ashley',
        id: 3
      },
      {
        name: 'James',
        id: 4
      }
    ]
  };

  handleRemovePlayer = (id) => {
    this.setState((prevState) => {
      return {
        players: prevState.players.filter((player) => {
          return player.id !== id;
        })
      };
    });
  };

  render() {
    return(
      <div className="scoreboard">
        <Header
          title="Scoreboard"
          totalPlayers={this.state.players.length}
        />
  
        {/* Players list */}
        {this.state.players.map((player) =>
          <Player
            key={player.id.toString()}
            id={player.id}
            name={player.name}
            removePlayer={this.handleRemovePlayer}
          />
        )}
      </div>
    );
  }
}

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        <button
          className="remove-player"
          onClick={() => props.removePlayer(props.id)}
        >
          ✖
        </button>
        {props.name}
      </span>

      <Counter />
    </div>
  );
};

class Counter extends Component {
  state = {
    score: 0
  };

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
        <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    );
  }
}

export default App;
