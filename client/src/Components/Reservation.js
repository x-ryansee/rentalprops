import React, { useState } from "react";
import "../Styling/Reservation.css";
import axios from "axios";
import VideoBackground from "./VideoBackground";

const Reservation = () => {
  const [first_name, setFirst_Name] = useState("");
  const [last_name, setLast_Name] = useState("");
  const [email, setEmail] = useState("");
  const [start_date, setStart_Date] = useState("");
  const [end_date, setEnd_Date] = useState("");
  const [adult_guests, setAdult_Guests] = useState(1);
  const [child_guests, setChild_Guests] = useState(0);
  const [rental_id, setRental_Id] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submitted");
    const reservation = {
      first_name,
      last_name,
      email,
      start_date,
      end_date,
      adult_guests,
      child_guests,
      rental_id,
    };
    try {
      const response = await axios.post("/reservations", reservation);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <VideoBackground style={{ height: '100vh', width: '100vw' }} />
        </div>
    <form className="reservation-form" onSubmit={handleSubmit}>
      <h1 className="reservation-title">Reservation Inquiry</h1>
      <div className="form-field">
        <label htmlFor="first-name">First Name:</label>
        <input
          type="text"
          id="first-name"
          value={first_name}
          onChange={(event) => setFirst_Name(event.target.value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="last-name">Last Name:</label>
        <input
          type="text"
          id="last-name"
          value={last_name}
          onChange={(event) => setLast_Name(event.target.value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="start-date">Start Date:</label>
        <input
          type="date"
          id="start-date"
          value={start_date}
          onChange={(event) => setStart_Date(event.target.value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="end-date">End Date:</label>
        <input
          type="date"
          id="end-date"
          value={end_date}
          onChange={(event) => setEnd_Date(event.target.value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="number-of-adults">Number of Adults:</label>
        <input
          type="number"
          id="number-of-adults"
          min="1"
        max="8"
        value={adult_guests}
        onChange={(event) => setAdult_Guests(event.target.value)}
      />
      </div>
      <div className="form-field">
        <label htmlFor="number-of-children">Number of Children:</label>
        <input
          type="number"
          id="number-of-children"
          min="0"
          max="8"
          value={child_guests}
          onChange={(event) => setChild_Guests(event.target.value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="rental_id">Location:</label>
        <select
          id="rental_id"
          value={rental_id}
          onChange={(event) => setRental_Id(event.target.value)}
        >
          <option value="Alpine">Alpine</option>
          <option value="Napa">Napa</option>
        </select>
      </div>
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
    </div>
  );
};

export default Reservation;

