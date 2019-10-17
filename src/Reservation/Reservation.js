import React from 'react';
import './Reservation.css'

const Reservation = (props) => {

  console.log("Inside Reservation props", props)

  return (
    <article>
      <p>{props.name}</p>
      <p>{props.date}</p>
      <p>{props.time}</p>
      <p>{props.numGuests}</p>
    </article>
  )
}

export default Reservation;