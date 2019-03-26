import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/calculator.component";
import Calculator from "./components/calculator.component";

class App extends Component {
  render() {
    return (
      <React.Fragment className="App">
        <h1 className="text-center">My Simple Calculator</h1>
        <Calculator />
      </React.Fragment>
    );
  }
}

export default App;
