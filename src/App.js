import React, { Component } from 'react';
import './App.css';
import Typeahead from "./Typeahead"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to our fruit database 🍊</h1>
        <p>Use the search box to find the best of the fruits 🍋 🍑 🍎 🍌</p>
        <Typeahead />
      </div>)
  };
}

export default App;
