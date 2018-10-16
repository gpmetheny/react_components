In case anyone else wants to use their finished project files from [React Basics](https://teamtreehouse.com/library/react-basics-2) to make sure they understand the changes Guil made off-screen, and know what React is doing behind the scenes in `create-react-app`, I recommend watching (or rewatching, in my case) Guil's videos on [Using Create React App](https://teamtreehouse.com/library/using-create-react-app) and following along, copying and pasting from your React Basics files and making any other needed changes.

Guil explains things really well in those videos, and you'll have a headstart on understanding the [React Components](https://teamtreehouse.com/library/react-components) course. Just use `npx create-react-app scoreboard` like Guil starts typing out in the video, as installing via [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) is the [current recommendation](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) for using create-react-app.

There will obviously be a bit of a learning curve vs. downloading the project files, and `create-react-app` did release a [new major version](https://reactjs.org/blog/2018/10/01/create-react-app-v2.html) (v2) right as this course was launched (though I haven't encountered any breaking changes yet), but I recommend giving it a shot! If everything breaks, you can always just download the project files ¯\\\_(ツ)\_/¯

----------------------------------------

In case anyone wants to use their existing files from the [React Components](https://teamtreehouse.com/library/react-components) course, they should be virtually the same as the project files for [React Context API](https://teamtreehouse.com/library/react-context-api). It looks like Guil has removed the high score functionality we built in the last couple videos, so you might have to work around that when managing state, and he also componentized `PlayerList` instead of mapping through the `players` array directly in App's `render` method.

My final code for React Components is [here](https://github.com/gpmetheny/react_components/tree/s4v6), and my Context API "starter files" (that are functionally similar to Guil's) are [here](https://github.com/gpmetheny/react_components/tree/context-s1v2), in case that helps anyone else modify their existing project!

### App.js

```javascript
// import PlayerList instead of Player
import PlayerList from './PlayerList';

class App extends Component {
  ...

  render() {
    return (
      <div className="scoreboard">
        <Header players={this.state.players} />

        <PlayerList
          players={this.state.players}
          changeScore={this.handleScoreChange}
          removePlayer={this.handleRemovePlayer}
          {/* Guil doesn't have this line, but I left it in the from React Components course */}
          getHighScore={this.getHighScore}
        />

        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}
```

### PlayerList.js

```javascript
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
          changeScore={changeScore}
          removePlayer={removePlayer}
          {/* like in App.js, Guil does not have the high score functionality built in the previous course */}
          isHighScore={getHighScore() === player.score}
        />
      )}
    </div>
  );
};

export default PlayerList;
```

I'll update here if I run into any big issues reusing the old code, and I'll continue updating with new branches on [Github](https://github.com/gpmetheny/react_components/tree/context-s1v2) for each video. Hope it helps someone!