import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
      name: 'Ty',
      city:'Minneapolis',
      zip: 55406
      }
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleZipChange = this.handleZipChange.bind(this);
  }

handleNameChange(event) {
  console.log(event.target.value);
  //this.state.user = event.target.value is NOT the way to go -- no mutating!
  this.setState({
    user: {
      ...this.state.user,
    name: event.target.value
    }
  });
}

handleCityChange(event) {
  console.log(event.target.value);
  //this.state.user = event.target.value is NOT the way to go -- no mutating!
  this.setState({
    user: {
      ...this.state.user,
    city: event.target.value
  }
 })
}

  handleZipChange(event)
  {
    console.log(event.target.value);
    //this.state.user = event.target.value is NOT the way to go -- no mutating!
    this.setState({
      user: {
        ...this.state.user,
        zip: event.target.value
      }
    })
  }

// const bowler = {
//   name: 'Ty',
//   lastBowlingScore: 150
// }

// const newBowler = {
//   name: bowler.name,
//   lastBowlingScore: 160,
//   numberOfStrikes: 4
// }

// const newBowler = {
//   ...bowler,
//   lastBowlingScore: 110
// }

//any time STATE changes, RENDER runs -- refreshes DOM with every change
  render() {
    return (
      <div className="App">
      
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div>
          <input onChange={this.handleNameChange} />
          <br />
          You typed: {this.state.user.name}
          <br />
          <input onChange = {this.handleCityChange} />
          <br />
          You typed: {this.state.user.city}
          <br />
          <input onChange={this.handleZipChange} />
          <br />
          You typed: {this.state.user.zip}

        </div>

      </div>
    );
  }
}

export default App;
