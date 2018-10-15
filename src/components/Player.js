import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Crown from './Crown';
import Counter from './Counter';

class Player extends PureComponent {
  static propTypes = {
    changeScore: PropTypes.func.isRequired,
    removePlayer: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired
  };

  render() {
    const {
      id,
      index,
      name,
      score,
      changeScore,
      removePlayer
    } = this.props;

    console.log(name + ' rendered');

    return (
      <div className="player">
        <span className="player-name">
          <button
            className="remove-player"
            onClick={() => removePlayer(id)}
          >
            ✖
          </button>
          <Crown />
          {name}
        </span>
  
        <Counter
          index={index}
          score={score}
          changeScore={changeScore}
        />
      </div>
    );
  }
}

export default Player;