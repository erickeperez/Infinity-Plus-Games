import React, {useState, useEffect} from 'react';
import Header from './components/Header'
import Game from './components/Game'
import './App.css';
import Hero from './components/Hero'
import PaginationContainer from './components/PaginationContainer'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Game />
      <PaginationContainer />
    </div>
  );
}

export default App;
