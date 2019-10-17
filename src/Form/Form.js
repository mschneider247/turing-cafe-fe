import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      id: Date.now(),
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  updateFormState = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <section>
        <input
          type='text' 
          placeholder='Name'
          name='name'
          value={this.state.name} 
          onChange={event => this.updateFormState(event)}>
        </input>
        <input
          type='text'  
          placeholder='Date (mm/dd)'
          name='date'
          value={this.state.date} 
          onChange={event => this.updateFormState(event)}>
        </input>
        <input
          type='text'  
          placeholder='Time' 
          name='time'
          value={this.state.time}
          onChange={event => this.updateFormState(event)}>
        </input>
        <input
          type='number'  
          placeholder='Number of Guests'
          name='number'
          value={this.state.guests} 
          onChange={event => this.updateFormState(event)}>
        </input>
        <button onClick={() => this.props.addReservation(this.state)}>Make Reservation</button>
      </section>
    )
  }
}

export default Form