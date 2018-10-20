import React from 'react';
import Header from './Header';
import PlayerList from './PlayerList';
import AddPlayerForm from './AddPlayerForm';
import '../App.css';

const App = () => {
  return (
    <div className="scoreboard">
      <Header />
      <PlayerList />
      <AddPlayerForm />
    </div>
  );
};

export default App;
