import React from "react";
import "./App.css";
import ResponsiveDrawer from "./components/sidebar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ResponsiveDrawer />
      </header>
    </div>
  );
}

export default App;
