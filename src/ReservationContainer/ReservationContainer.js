import React from 'react';
import './ReservationContainer.css'
import Reservation from '../Reservation/Reservation'

const ReservationContainer = (props) => {

  console.log("Inside ReservationContainer props.reservations:::", props.reservations)

  let reservations = props.reservations.map(reservation => {
    return <Reservation 
      key={reservation.id}
      id={reservation.id}
      name={reservation.name}
      date={reservation.date}
      time={reservation.time}
      numGuests={reservation.number}
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