import React, { useState, useEffect } from 'react'
import Calendar from './Calendar'

import "../Styling/AdminPortal.css";

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

  const handleStatusChange = async (e, reservationId) => {
    const response = await fetch(`/reservations/${reservationId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        status: e.target.value
      })
    });
  
    if (response.ok) {
      const fetchReservations = async () => {
        const res = await fetch('/reservations');
        const json = await res.json();
        setReservations(json);
      };
  
      fetchReservations();
    }
  };

  const handleDelete = async (reservationId) => {
    const response = await fetch(`/reservations/${reservationId}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      const fetchReservations = async () => {
        const res = await fetch('/reservations');
        const json = await res.json();
        setReservations(json);
      };

      fetchReservations();
    }
  };

  return (
    <div className="hotel-booking-container">
      <h2 className="hotel-booking-header">Reservation Requests</h2>
      <table className="hotel-booking-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Adult Guests</th>
            <th>Child Guests</th>
            <th>Rental</th>
            <th>Status</th>
            {/* Add new column */}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map(reservation => (
            <tr key={reservation.id} className={`hotel-booking-row ${reservation.status === 'Approved' ? 'approved' : reservation.status === 'Rejected' ? 'rejected' : ''}`}>
              <td className="hotel-booking-cell">{reservation.first_name}</td>
              <td className="hotel-booking-cell">{reservation.last_name}</td>
              <td className="hotel-booking-cell">{reservation.email}</td>
              <td className="hotel-booking-cell">{reservation.start_date}</td>
              <td className="hotel-booking-cell">{reservation.end_date}</td>
              <td className="hotel-booking-cell">{reservation.adult_guests}</td>
              <td className="hotel-booking-cell">{reservation.child_guests}</td>
              <td className="hotel-booking-cell">{reservation.rental_id}</td>
              <td className="hotel-booking-cell">
                <select
                  value={reservation.status}
                  onChange={e => handleStatusChange(e, reservation.id)}
                  className="hotel-booking-select"
                >
                  <option value="Rejected">Rejected</option>
                  <option value="Pending">Pending</option>
                  <option value="Approved">Approved</option>
                </select>
              </td>
              {/* Show delete button if status is "Rejected" */}
              <td className="hotel-booking-cell">
                {reservation.status === "Rejected" ? (
                  <button onClick={() => handleDelete(reservation.id)}>
                    Delete
                  </button>
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 style={{margin: "80px", marginBottom: "80px"}} className="hotel-booking-header">Messages</h2>
      <table className="hotel-booking-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id} className="hotel-booking-row">
              <td className="hotel-booking-cell">{contact.name}</td>
              <td className="hotel-booking-cell">{contact.email}</td>
              <td className="hotel-booking-cell">{contact.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ margin: "50px", paddingRight: "1cm"}} >
            <h2>Calendars</h2>
      <Calendar/>
      </div>
    </div>
  );
};


export default AdminPortal
