import React from 'react';
import PropTypes from 'prop-types';
import {Consumer} from './Context';
import Player from './Player';

const PlayerList = ({getHighScore, changeScore, removePlayer}) => {
  return (
    <Consumer>
      {(context) => {
        return (
          <React.Fragment>
            {context.players.map((player, index) =>
              <Player
                {...player}
                index={index}
                key={player.id.toString()}
                isHighScore={getHighScore() === player.score}
                changeScore={changeScore}
                removePlayer={removePlayer}
              />
            )}
          </React.Fragment>
        );
      }}
    </Consumer>
  );
};

PlayerList.propTypes = {
  getHighScore: PropTypes.func.isRequired,
  changeScore: PropTypes.func.isRequired,
  removePlayer: PropTypes.func.isRequired
};

export default PlayerList;