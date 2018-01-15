import React, { Component } from 'react';
import CakeList from './components/CakeList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cakes: []
    };
  }

  componentDidMount() {
    const url = "http://ec2-52-209-201-89.eu-west-1.compute.amazonaws.com:5000/api/cakes";
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', () => {
      if (request.status !== 200) return;

      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({cakes: data});
    });
    request.send();
  }

  render() {
    return (
      <CakeList cakes={this.state.cakes} />
    );
  }
}

export default App;
