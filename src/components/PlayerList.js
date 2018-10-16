import React from 'react';
import Player from './Player';

const PlayerList = ({players, getHighScore, changeScore, removePlayer}) => {
  return (
    <div>
      {players.map((player, index) =>
        <Player
          index={index}
          key={player.id.toString()}
          id={player.id}
          name={player.name}
          score={player.score}
          isHighScore={getHighScore() === player.score}
          changeScore={changeScore}
          removePlayer={removePlayer}
        />
      )}
    </div>
  );
};

export default PlayerList;