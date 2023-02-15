// import React, { useState, useEffect } from 'react';
// import Calendar from 'react-calendar';
// import axios from 'axios';
// import "../Styling/BookingCalendar.css"

// const BookingCalendar = ({ selectedStart, selectedEnd, onSelectDate }) => {
//   const [reservations, setReservations] = useState([]);
//   const [blockedDates, setBlockedDates] = useState([]);
//   const [start, setStart] = useState(null);
//   const [end, setEnd] = useState(null);

//   useEffect(() => {
//     axios.get('/reservations')
//       .then(response => {
//         setReservations(response.data);
//       });
//   }, []);

//   useEffect(() => {
//     const dates = reservations.map(reservation => {
//       return {
//         from: new Date(reservation.start_date),
//         to: new Date(reservation.end_date),
//       };
//     });
//     setBlockedDates(dates);
//   }, [reservations]);

//   const isBlocked = date =>
//     blockedDates.some(d => date >= d.from && date <= d.to);

//   const tileClassName = ({ date, view }) => {
//     if (view === 'month') {
//       if (isBlocked(date)) {
//         return 'blocked';
//       } else if (
//         start && 
//         !end && 
//         start.toDateString() === date.toDateString()
//       ) {
//         return 'selected start';
//       } else if (
//         start && 
//         end &&
//         date >= start && 
//         date <= end
//       ) {
//         return 'selected range';
//       } else {
//         return 'available';
//       }
//     }
//   };

//   const handleSelect = date => {
//     console.log('Clicked date:', date);
//     console.log('Selected start date:', start);
//     console.log('Selected end date:', end);

//     if (isBlocked(date)) {
//       console.log('Date is blocked');
//       return;
//     }

//     if (!start) {
//       console.log('Setting start date:', date);
//       onSelectDate({ start: date, end: null });
//       setStart(date);
//       setEnd(null);
//     } else if (start && !end && date > start) {
//       console.log('Setting end date:', date);
//       onSelectDate({ start: start, end: date });
//       setEnd(date);
//     } else if (start && end) {
//       console.log('Clearing dates');
//       onSelectDate({ start: null, end: null });
//       setStart(null);
//       setEnd(null);
//     }
//   };

//   return (
//     <div className="calendar-container">
//       <Calendar
//         tileClassName={tileClassName}
//         onClickDay={handleSelect}
//       />
//       <style>
//         {`
//           .calendar-container {
//             padding: 20px;
//           }

//           .react-calendar {
//             width: 400px;
//             height: 400px;
//           }

//           .react-calendar__tile {
//             border-radius: 50%;
//           }

//           .blocked {
//             background-color: red;
//             color: white;
//           }

//           .available {
//             background-color: green;
//             color: white;
//           }

//           .selected.start {
//             background-color: blue;
//             color: white;
//           }

//           .selected.range {
//             background-color: purple;
//             color: white;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default BookingCalendar;


import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const BookingCalendar = () => {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 20 }}>
        <button
          onClick={() => setIsCalendarOpen(true)}
          style={{
            backgroundColor: "#FF5A5F",
            color: "#FFFFFF",
            borderRadius: 20,
            padding: 10,
            marginRight: 10
          }}
        >
          Check in
        </button>
        <button
          onClick={() => setIsCalendarOpen(true)}
          style={{
            backgroundColor: "#FF5A5F",
            color: "#FFFFFF",
            borderRadius: 20,
            padding: 10,
            marginLeft: 10
          }}
        >
          Check out
        </button>
      </div>
      {(checkIn || checkOut) && (
        <div style={{
          backgroundColor: "#EBEBEB",
          color: "#555555",
          borderRadius: 20,
          padding: 20,
          marginBottom: 20,
          width: 400,
          textAlign: "center",
        }}>
          {checkIn ? `Check in: ${checkIn.toLocaleDateString()}` : null}
          {checkOut ? `Check out: ${checkOut.toLocaleDateString()}` : null}
        </div>
      )}
      {isCalendarOpen && (
        <Calendar
          onChange={(date) => {
            if (!checkIn) {
              setCheckIn(date);
            } else if (!checkOut) {
              setCheckOut(date);
              setIsCalendarOpen(false);
            } else {
              setCheckIn(date);
              setCheckOut(null);
            }
          }}
          value={checkIn || checkOut || new Date()}
          style={{
            width: 400,
            height: 400,
            backgroundColor: "#FFFFFF",
            borderRadius: 10,
            boxShadow: "0 0 10px 0 #BBBBBB",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}
        />
      )}
    </div>
  );
};

export default BookingCalendar;

