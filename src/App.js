import React, {useState, useEffect} from 'react';
import Header from './components/Header'
import Game from './components/Game'
import './App.css';
import Hero from './components/Hero'
import Pagination from './components/Pagination'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Game />
      <Pagination />
    </div>
  );
}

export default App;
