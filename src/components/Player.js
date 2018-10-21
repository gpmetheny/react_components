import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Consumer} from './Context';
import Crown from './Crown';
import Counter from './Counter';

class Player extends PureComponent {
  static propTypes = {
    isHighScore: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired
  };

  render() {
    const {
      index,
      isHighScore
    } = this.props;

    return (
      <div className="player">
      
        <Consumer>
          {({players, actions}) => {
            return (
              <span className="player-name">
                <button
                  className="remove-player"
                  onClick={() => actions.removePlayer(players[index].id)}
                >
                  ✖
                </button>
                <Crown isHighScore={isHighScore} />
                {players[index].name}
              </span>
            );
          }}
        </Consumer>
  
        <Counter index={index} />
      </div>
    );
  }
}

export default Player;