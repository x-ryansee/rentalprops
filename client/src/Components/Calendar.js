// import React, { useState , useEffect } from "react";
// import "../Styling/Reservation.css";
// import { DateRangePicker } from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css';
// import axios from "axios";

// const Reservation = () => {
// const [reservations, setReservations] = useState([]);
// const [blockedDates, setBlockedDates] = useState([]);

// useEffect(() => {
// const fetchReservations = async () => {
// const response = await axios.get("/reservations");
// setReservations(response.data);
// };
// fetchReservations();
// }, []);

// useEffect(() => {
// setBlockedDates(
// reservations.map((reservation) => {
// const start = new Date(reservation.start_date);
// const end = new Date(reservation.end_date);
// const dates = [];
// for (
// let current = start;
// current <= end;
// current.setDate(current.getDate() + 1)
// ) {
// dates.push(new Date(current));
// }
// return dates;
// })
// );
// }, [reservations]);

// // Render your calendar component and pass the blockedDates array as a prop


//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Form submitted");
//     console.log({
//       startDate: startDate ? startDate.toISOString() : null,
//       endDate: endDate ? endDate.toISOString() : null,
//     });
//   };

//   return (
//     <form className="reservation-form" onSubmit={handleSubmit}>
//       <h1 className="reservation-title">Reservation</h1>
//       <div className="form-field">
//         <label htmlFor="start-date">Start Date:</label>
//         <DateRangePicker
//           startDate={startDate}
//           endDate={endDate}
//           onDatesChange={({ startDate, endDate }) => {
//             setStartDate(startDate);
//             setEndDate(endDate);
//           }}
//           focusedInput={focusedInput}
//           onFocusChange={focusedInput => setFocusedInput(focusedInput)}
//           isDayBlocked={date => // check if date is blocked based on your backend data} 
//         />
//       </div>
//       <button type="submit" className="submit-button">
//         Submit
//       </button>
//     </form>
//   );
// }

// export default Reservation;
