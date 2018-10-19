import React from 'react';
import {Consumer} from './Context';
import Player from './Player';

const PlayerList = () => {
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
                isHighScore={context.actions.getHighScore() === player.score}
              />
            )}
          </React.Fragment>
        );
      }}
    </Consumer>
  );
};

export default PlayerList;