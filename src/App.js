import React, {useState, useEffect} from 'react';
import Game from './components/Game'
import './App.css';
import RegF from './Registration'

function App() {
  return (
    <div className="App">
      <Game />
      <RegF />
    </div>
  );
}

export default App;
