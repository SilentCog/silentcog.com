import React, { Component } from 'react';

import './App.css';

import Projects from './pages/projects/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-body App-title">SilentCog</h1>
        </header>
        <div className="App-body">
          <p className="App-intro">
            Weekend projects of a random group of developers based in NYC.
          </p>
          <Projects />
        </div>
      </div>
    );
  }
}

export default App;
