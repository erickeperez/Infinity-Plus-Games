import React, {useState, useEffect} from 'react';
import Header from './components/Header'
import Game from './components/Game'
import './App.css';
import RegF from './components/Registration'
import Platform from './components/Platform'

function App() {
  return (
    <div className="App">
      <Header />
      <Platform />
      <Game />
      <RegF />
    </div>
  );
}

export default App;
