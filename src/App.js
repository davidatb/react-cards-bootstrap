import React from "react";
import Cards from "./components/Cards";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="text-uppercase text-center font-weight-bold display-1 text-light ">
        <strong>SuperBikes</strong>
      </h1>
      <Cards />
    </div>
  );
}

export default App;
