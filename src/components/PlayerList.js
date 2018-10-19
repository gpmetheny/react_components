import React from 'react';
import PropTypes from 'prop-types';
import {Consumer} from './Context';
import Player from './Player';

const PlayerList = ({getHighScore}) => {
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
              />
            )}
          </React.Fragment>
        );
      }}
    </Consumer>
  );
};

PlayerList.propTypes = {
  getHighScore: PropTypes.func.isRequired
};

export default PlayerList;