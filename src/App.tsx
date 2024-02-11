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
        <Sales
          endpoint={popularsales}
          className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5"
        />
        <Sales
          endpoint={toprateslaes}
          className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8"
        />
      </main>
    </div>
  );
}

export default App;
