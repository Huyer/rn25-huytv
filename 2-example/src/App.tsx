import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <div id="header">The Pulpit Rock</div>
      <div id="main">
        <div className="row">
          <div className="col">
            <ul>
              <li>The Driver</li>
              <li>The Walk</li>
              <li>The Return</li>
              <li>The End</li>
            </ul>
          </div>
          <div className="col-6">
            <h1>The Walk</h1>
            <p>The Walk to the Pulpit Rock will take your</p>
            <img src="https://s27363.pcdn.co/wp-content/uploads/2019/09/Pulpit-Rock.jpg.optimal.jpg" />
          </div>
          <div className="col">
            <div className="intro">
              <h1>What?</h1>
              <p>The Walk to the Pulpit Rock will take your</p>
              <h1>Where?</h1>
              <p>The Walk to the Pulpit Rock will take your</p>
              <h1>Price?</h1>
              <p>The Walk is free</p>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <h2>Footer</h2>
      </div>
    </div>
  );
}
export default App;
