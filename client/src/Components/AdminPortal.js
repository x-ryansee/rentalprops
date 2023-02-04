import React, { useState, useEffect } from 'react'

const AdminPortal = () => {
  const [reservations, setReservations] = useState([])
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    const fetchReservations = async () => {
      const res = await fetch('/reservations')
      const json = await res.json()
      setReservations(json)
    }

    const fetchContacts = async () => {
      const res = await fetch('/contacts')
      const json = await res.json()
      setContacts(json)
    }

    fetchReservations()
    fetchContacts()
  }, [])

  return (
    <div>
      <h2>Reservation Requests</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Adult Guests</th>
            <th>Child Guests</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map(reservation => (
            <tr key={reservation.id}>
              <td>{reservation.first_name}</td>
              <td>{reservation.last_name}</td>
              <td>{reservation.email}</td>
              <td>{reservation.start_date}</td>
              <td>{reservation.end_date}</td>
              <td>{reservation.adult_guests}</td>
              <td>{reservation.child_guests}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Messages</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default AdminPortal
