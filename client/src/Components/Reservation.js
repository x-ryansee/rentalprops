import React, { useState } from "react";
import "../Styling/Reservation.css";
import RegistrationForm from "./RegistrationForm";

const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [numberOfAdults, setNumberOfAdults] = useState(1);
  const [numberOfChildren, setNumberOfChildren] = useState(0);
  const [location, setLocation] = useState("Tahoe");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
    console.log({
      firstName,
      lastName,
      email,
      startDate,
      endDate,
      numberOfAdults,
      numberOfChildren,
      location,
    });
  };

  return (
    <div>
    <form className="reservation-form" onSubmit={handleSubmit}>
      <h1 className="reservation-title">Reservation</h1>
      <div className="form-field">
        <label htmlFor="first-name">First Name:</label>
        <input
          type="text"
          id="first-name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="last-name">Last Name:</label>
        <input
          type="text"
          id="last-name"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
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
          value={startDate}
          onChange={(event) => setStartDate(event.target.value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="end-date">End Date:</label>
        <input
          type="date"
          id="end-date"
          value={endDate}
          onChange={(event) => setEndDate(event.target.value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="number-of-adults">Number of Adults:</label>
        <input
          type="number"
          id="number-of-adults"
          min="1"
        max="8"
        value={numberOfAdults}
        onChange={(event) => setNumberOfAdults(event.target.value)}
      />
      </div>
      <div className="form-field">
        <label htmlFor="number-of-children">Number of Children:</label>
        <input
          type="number"
          id="number-of-children"
          min="0"
          max="8"
          value={numberOfChildren}
          onChange={(event) => setNumberOfChildren(event.target.value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="location">Location:</label>
        <select
          id="location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        >
          <option value="Tahoe">Tahoe</option>
          <option value="Napa">Napa</option>
        </select>
      </div>
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
    <RegistrationForm/>
    </div>
  );
};

export default Reservation;

