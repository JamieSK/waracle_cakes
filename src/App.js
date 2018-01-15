import React, { Component } from 'react';
import Cake from './components/Cake';
import './App.css';

class App extends Component {
  render() {
    return (
      <Cake
        name="Black Forrest"
        imageUrl="https://livforcake.com/wp-content/uploads/2017/07/black-forest-cake-6.jpg"
      />
    );
  }
}

export default App;
