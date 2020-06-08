import React, {useState, useEffect} from 'react';
import Header from './components/Header'
import Game from './components/Game'
import './App.css';
import RegF from './components/Registration'
import Platform from './components/Platform'
import Hero from './components/Hero'
import Pagination from './components/Pagination'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Platform />
      <Game />
      <Pagination />
      <RegF />
    </div>
  );
}

export default App;
