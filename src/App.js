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
      },
        userInputs: {
          name: '',
          city: '',
          zip: ''
        }
    };

    // this.handleNameChange = this.handleNameChange.bind(this);
    // this.handleCityChange = this.handleCityChange.bind(this);
    // this.handleZipChange = this.handleZipChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.handleChangeFor = this.handleChangeFor.bind(this); not needed because arrow function used
  }

// handleNameChange(event) {
//   console.log(event.target.value);
//   //this.state.user = event.target.value is NOT the way to go -- no mutating!
//   this.setState({
//     user: {
//       ...this.state.user,
//     name: event.target.value
//     }
//     //the spread operator (...) says give me everything already in there, only update the thing(s) I specifically name
//   });
// }

// handleCityChange(event) {
//   console.log(event.target.value);
//   //this.state.user = event.target.value is NOT the way to go -- no mutating!
//   this.setState({
//     user: {
//       ...this.state.user,
//     city: event.target.value
//   }
//  })
// }

  // handleZipChange(event) {
  //   console.log(event.target.value);
  //   //this.state.user = event.target.value is NOT the way to go -- no mutating!
  //   this.setState({
  //     user: {
  //       ...this.state.user,
  //       zip: event.target.value
  //     }
  //   })
  // }

  handleChangeFor = (propertyName) => {
    return (event) => {
      this.setState({
        userInputs: {
          ...this.state.userInputs,
          [propertyName]: event.target.value,
        }
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      user: { ...this.state.userInputs},
      userInputs: {
        name: '',
        city: '',
        zip: ''
      }
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.userInputs.name} placeholder='name' onChange={this.handleChangeFor("name")} />
          <p>Your name: {this.state.user.name}</p>
          <input value={this.state.userInputs.city} placeholder='city' onChange={this.handleChangeFor("city")} />
          <p>You're from: {this.state.user.city}</p>
          <input value={this.state.userInputs.zip} placeholder='zip code' onChange={this.handleChangeFor("zip")} />
          <p>Your mail gets sorted to: {this.state.user.zip}</p>
          <input type='submit' value='Submit' />
        </form>
        
      </div>
    );
  }
}

export default App;

//example of updating values in an object
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
