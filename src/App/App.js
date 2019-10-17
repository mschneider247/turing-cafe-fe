import React, { Component } from 'react';
import './App.css';
import ReservationContainer from '../ReservationContainer/ReservationContainer';
import Form from '../Form/Form'

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
    }
  }

  componentDidMount () {
    console.log("App is mounting")
    fetch('http://localhost:3001/api/v1/reservations')
      .then(data => data.json())
      .then(data => this.setState({ reservations: data}))
  }

  addReservation = (reservation) => {
    let currentReservations = [...this.state.reservations]
    currentReservations.push(reservation)
    this.setState({ reservations: currentReservations})
  }

  removeReservation = (id) => {
    console.log("Remove Reservation Firing!!")
    console.log("id===", id);
    let currentReservations = [...this.state.reservations]
    currentReservations.forEach((reservation, index) => {
      if (reservation.id === id){
        currentReservations.splice(index, 1)
      }
    });
    this.setState({ reservations: currentReservations})
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <ReservationContainer reservations={this.state.reservations} removeReservation={this.removeReservation}/>
        </div>
      </div>
    )
  }
}

export default App;
