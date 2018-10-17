import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';

const PlayerList = ({players, getHighScore, changeScore, removePlayer}) => {
  return (
    // avoids unnecessary wrapper element, i.e. a div
    <React.Fragment>
      {players.map((player, index) =>
        <Player
          // same as: id={player.id} name={player.name} score={player.score}
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
};

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
  getHighScore: PropTypes.func.isRequired,
  changeScore: PropTypes.func.isRequired,
  removePlayer: PropTypes.func.isRequired
};

export default PlayerList;