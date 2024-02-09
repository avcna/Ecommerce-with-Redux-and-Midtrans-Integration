import React from 'react';
import './App.css';
import Hero from './components/Hero';
import { heroapi } from './components/Data/index';

function App() {
  return (
    <div className="App">
      <main>
        <Hero data={heroapi}/>
      </main>
    </div>
  );
}

export default App;
