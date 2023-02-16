import React, { useState, useEffect } from "react";
import "../Styling/Reservation.css";
import axios from "axios";
import emailjs from 'emailjs-com';
import BookingCalendar from "./BookingCalendar";


const Reservation = () => {
  const [first_name, setFirst_Name] = useState("");
  const [last_name, setLast_Name] = useState("");
  const [email, setEmail] = useState("");
  const [start_date, setStart_Date] = useState("");
  const [adult_guests, setAdult_Guests] = useState(1);
  const [child_guests, setChild_Guests] = useState(0);
  const [rental_id, setRental_Id] = useState("");
  const [rentals, setRentals] = useState([]);
  const [dates, setDates] = useState({ startDate: null, endDate: null });
  

  const onSelectDate = (date) => {
    if (!dates.startDate || (dates.startDate && dates.endDate)) {
      setDates({ startDate: date, endDate: null });
    } else if (dates.startDate && !dates.endDate) {
      if (date >= dates.startDate) {
        setDates({ ...dates, endDate: date });
      } else {
        setDates({ startDate: date, endDate: null });
        console.log(start_date)
      }
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q4ase0q', 'template_kg5mdh2', e.target, 'uYGC5Ml2E_SOogSlu')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await handleSubmit(event);
    sendEmail(event);
  };

  useEffect(() => {
    const fetchRentals = async () => {
      try {
        const response = await axios.get("/rentals");
        setRentals(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRentals();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submitted");
    const reservation = {
      first_name,
      last_name,
      email,
      start_date: dates.startDate.start,
      end_date: dates.endDate.end,
      adult_guests,
      child_guests,
      rental_id, // set rental_id to the selected value
    };
    try {
      const response = await axios.post("/reservations", reservation);
      console.log(response);
      window.alert("Your reservation inquiry has been submitted! Your conirmation email has been sent."); // add success message
    } catch (error) {
      console.error(error);
      if (error.response.status === 422) {
        window.alert(
          "There was a problem with your reservation. Please try again."
        );
      }
    }
  };
  

  return (
    <div>
        <div>
        <div style={{ position: 'relative' }}>
          <img src="https://www.forestsuites.com/i/SITE_170315_17005325_XP7M1/content/CMS_190423_14211154_BLG15/8B33DF5E-061E-9638-323576857F129289.JPG" alt="My Pic" width= "1200px"/>
          <h1 style={{ color: "white", textAlign: 'center', position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 1, fontSize: '4rem' }}>
              Reservation Inquiry
            </h1>
        </div>
        
        </div>
    <form className="reservation-form" onSubmit={handleFormSubmit}>
    {/* <form className="reservation-form" onSubmit={handleSubmit}> */}
      <div className="form-field">
        <label htmlFor="rental_id">Location:</label>
        <select
          id="rental_id"
          value={rental_id}
          onChange={(event) => setRental_Id(event.target.value)}
        >
          <option value="">Select a location</option>
          <option value="1">Alpine</option>
          <option value="2">Napa</option>
        </select>

      </div>
      <div className="form-field">
        <label htmlFor="first-name">First Name:</label>
        <input
            type="text"
            id="first-name"
            value={first_name}
            onChange={(event) => setFirst_Name(event.target.value)}
        />
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
      <BookingCalendar onSelectDate={onSelectDate}/>
      <div style={{ margin: "50px"}} className="form-field">
        <label htmlFor="number-of-adults">Number of Adults:</label>
        <input
          type="number"
          id="number-of-adults"
          min="1"
        max="8"
        value={adult_guests}
        onChange={(event) => setAdult_Guests(event.target.value)}
      />
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
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
    </div>
  );
};

export default Reservation;

