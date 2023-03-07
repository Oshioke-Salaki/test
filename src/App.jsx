import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Nav from './Nav';
import Hero from './Hero';
import AboutUs from './AboutUs';
import Development from './Development';

function App() {
  return (
    <div className="App">
      <div className="main">
        <Nav />
        <Hero />
      </div>
      <AboutUs />
      <Development />
    </div>
  );
}

export default App;
