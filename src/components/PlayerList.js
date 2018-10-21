import React from 'react';
import {Consumer} from './Context';
import Player from './Player';

const PlayerList = () => {
  return (
    <Consumer>
      {({players, actions}) => {
        return (
          <React.Fragment>
            {players.map((player, index) =>
              <Player
                index={index}
                key={player.id.toString()}
                isHighScore={actions.getHighScore() === player.score}
              />
            )}
          </React.Fragment>
        );
      }}
    </Consumer>
  );
};

export default PlayerList;