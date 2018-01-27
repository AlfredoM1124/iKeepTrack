import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class Projects extends Component {
  render() {
      console.log(this.props);
    return (
      <div className="Projects">
        Imported component from 'projects.js'
        {this.props.test}
      </div>
    );
  }
}

export default Projects;