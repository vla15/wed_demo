import React, { Component } from 'react';
import './App.css';
import BodyComponent from './components/body.jsx';
import NavBar from './components/navBar.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <BodyComponent />
      </div>
    );
  }
}

export default App;
