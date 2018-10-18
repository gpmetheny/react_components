import React, { Component } from 'react';
import {Provider} from './Context';
import Header from './Header';
import PlayerList from './PlayerList';
import AddPlayerForm from './AddPlayerForm';
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

  prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState((prevState) => {
      return {
        score: prevState.players[index].score += delta
      };
    });
  };

  getHighScore = () => {
    return this.state.players.reduce((highScore, player) => {
      if (player.score > highScore) {
        return player.score;
      }
      return highScore;
    }, 1);
  };

  handleAddPlayer = (name) => {
    this.setState((prevState) => {
      return {
        players: [
          ...prevState.players,
          {
            name,
            id: this.prevPlayerId += 1,
            score: 0
          }
        ]
      };
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
      <Provider value={{
        players: this.state.players
      }}>
        <div className="scoreboard">
          <Header />

          <PlayerList
            getHighScore={this.getHighScore}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
          />

          <AddPlayerForm addPlayer={this.handleAddPlayer} />
        </div>
      </Provider>
    );
  }
}

export default App;
