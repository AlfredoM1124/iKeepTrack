import React, { Component } from 'react';
// import logo from './logo.svg';
import Projects from './components/projects';
import Registration from './components/Register/registration.jsx';
import AccountFields from './components/Register/AccountFields.jsx';
import './App.css';

class App extends Component {
constructor(){
  super();
  this.state = {
    projects: [
      {
        title: 'Inventory Manager',
        category: 'Web-Development'
      },
      {
        title: 'Item Database',
        category: 'Back-end Development'
      },
      {
        title: 'React Components',
        category: 'Front-End Development'
      }
    ]
  }
}

  render() {
    return (
      <div className="App">
        <div className="App-Header">
          <h2>Welcome to iKeepTrack</h2>
          </div>
          <AccountFields />
          <Registration />
          <Projects />
          <p className="App-intro">
          OIAWNDIUANWDPUNAWIDBAIUWNDIUAWBDAWIUDNPAWIU
          </p>
      </div>
    );
  }
}

export default App;
