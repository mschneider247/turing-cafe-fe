import React from 'react';
import './Reservation.css'

const Reservation = (props) => {

  return (
    <article className="reservation">
      <p>{props.name}</p>
      <p>{props.date}</p>
      <p>{props.time}</p>
      <p>{props.numGuests}</p>
      <button onClick={() => props.removeReservation(props.id)}>Cancel</button>
    </article>
  )
}

export default Reservation;