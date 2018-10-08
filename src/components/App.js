import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import '../App.css';

class App extends Component {
  state = {
    players: [
      {
        name: 'Guil',
        id: 1,
        score: 0
      },
      {
        name: 'Treasure',
        id: 2,
        score: 0
      },
      {
        name: 'Ashley',
        id: 3,
        score: 0
      },
      {
        name: 'James',
        id: 4,
        score: 0
      }
    ]
  };

  handleScoreChange = (index, delta) => {
    this.setState((prevState) => {
      return {
        score: prevState.players[index].score += delta
      }
    });
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
    return (
      <div className="scoreboard">
        <Header
          title="Scoreboard"
          players={this.state.players}
        />
  
        {/* Players list */}
        {this.state.players.map((player, index) =>
          <Player
            index={index}
            key={player.id.toString()}
            id={player.id}
            name={player.name}
            score={player.score}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
          />
        )}
      </div>
    );
  }
}

export default App;
