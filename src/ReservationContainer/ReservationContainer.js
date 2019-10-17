import React from 'react';
import './ReservationContainer.css'
import Reservation from '../Reservation/Reservation'

const ReservationContainer = (props) => {

  let reservations = props.reservations.map(reservation => {
    return <Reservation 
      key={reservation.id}
      id={reservation.id}
      name={reservation.name}
      date={reservation.date}
      time={reservation.time}
      number={reservation.number}
      removeReservation={props.removeReservation}
      />
  })

  return (
    <section className="reservations">
      {reservations}
    </section>
  )
}

export default ReservationContainer;