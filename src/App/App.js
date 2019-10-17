import React, { Component } from 'react';
import './App.css';
import ReservationContainer from '../ReservationContainer/ReservationContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount () {
    console.log("App is mounting")
    fetch('http://localhost:3001/api/v1/reservations')
      .then(data => data.json())
      .then(data => this.setState({ reservations: data}))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <ReservationContainer reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
