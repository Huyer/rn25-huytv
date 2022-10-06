import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <div className="bg-ccc text-white fs-1 text-center">The Pulpit Rock</div>
      <div className="row pt-5">
        <div className="col-md-4">
          <p className="border-bottom py-4 ps-3">The Driver</p>
          <p className="border-bottom py-4 ps-3">The Driver</p>
          <p className="border-bottom py-4 ps-3">The Driver</p>
          <p className="border-bottom py-4 ps-3">The Driver</p>
        </div>
        <div className="col-md-4">
          <h1>The Walk</h1>
          <p>
            The Walk to the Pulpit Rock will take your to the Pulpit Rock will
            take your to the Pulpit Rock will take your
          </p>
          <img
            className="w-100"
            src="https://s27363.pcdn.co/wp-content/uploads/2019/09/Pulpit-Rock.jpg.optimal.jpg"
            alt=""
          />
        </div>
        <div className="col-md-4 bg-secondary h-50">
          <h1>What?</h1>
          <p>The Walk to the Pulpit Rock will take your</p>
          <h1>Where?</h1>
          <p>The Walk to the Pulpit Rock will take your</p>
          <h1>Price?</h1>
          <p>The Walk is free</p>
        </div>
      </div>
      <div className="bg-ccc text-white fs-1 text-center mb-0">Footer</div>
    </div>
  );
}
export default App;
