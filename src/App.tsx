import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import { heroapi, popularsales, toprateslaes } from "./components/Data/index";
import Sales from "./components/Sales";

function App() {
  return (
    <div className="App">
      <main>
        <Hero data={heroapi} />
        <Sales endpoint={popularsales} />
        <Sales endpoint={toprateslaes} />
      </main>
    </div>
  );
}

export default App;
