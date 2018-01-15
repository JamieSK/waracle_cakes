import React, { Component } from 'react';
// import CakeList from './components/CakeList';
import AddCake from './components/AddCake';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cakes: [],
      newCake: {
        name: 'Rubik\'s cake',
        comment: 'Unsolveable',
        imageUrl: 'https://static.boredpanda.com/blog/wp-content/uploads/2017/03/rubiks-cube-cake-pastry-cedric-grolet-17-58dcf71b65cef__700.jpg',
        yumFactor: 4
      }
    };
    this.saveCake = this.saveCake.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
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

  saveCake(event) {
    event.preventDefault();

    const url = "http://ec2-52-209-201-89.eu-west-1.compute.amazonaws.com:5000/api/cakes";
    const request = new XMLHttpRequest();
    request.open('POST', url);
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(this.state.newCake));
  }

  handleInputChange(event) {
    const key = event.target.name;
    const value = event.target.value;
    let newCake = {...this.state.newCake};
    newCake[key] = value;
    this.setState({newCake: newCake});
  }

  render() {
    return (
      <AddCake
        saveCake={this.saveCake}
        handleInputChange={this.handleInputChange}
        newCake={this.state.newCake}
      />
      // <CakeList cakes={this.state.cakes} />
    );
  }
}

export default App;
