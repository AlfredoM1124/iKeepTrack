import React, { Component } from 'react';
// import logo from './logo.svg';
import Projects from './components/projects';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        My Final Project.
        <Projects test="Hello World!" />
      </div>
    );
  }
}

export default App;
