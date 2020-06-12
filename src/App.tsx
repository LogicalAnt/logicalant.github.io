import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Particle } from "./components/Particle";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Particle />
    </div>
  );
}

export default App;
