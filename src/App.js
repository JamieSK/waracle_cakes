import React, { Component } from 'react';
import CakeList from './components/CakeList';
import './App.css';

class App extends Component {
  render() {
    const cakes = [];
    return (
      <CakeList cakes={cakes} />
    );
  }
}

export default App;
