import React, { Component } from 'react';
// import logo from './logo.svg';
import Projects from './components/projects';
// import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [
        {
          title: 'Inventory Management App',
          category: 'Mobile Development',
        },
        {
          title: 'User Login',
          category: 'User Authentication',
        },
        {
          title: 'User interface',
          category: 'Front-End Development',
        },
      ]
    }
  }
  render() {
    return (
      <div className="App">
        My Final Project.
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
