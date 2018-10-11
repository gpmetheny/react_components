import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = (props) => {
  return (
    <header>
      <Stats players={props.players} />
      <h1>{props.title}</h1>
      <Stopwatch />
    </header>
  );
};

export default Header;