import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';
import "../Styling/BookingCalendar.css"

const BookingCalendar = ({ selectedStart, selectedEnd, onSelectDate }) => {
  const [reservations, setReservations] = useState([]);
  const [blockedDates, setBlockedDates] = useState([]);
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  useEffect(() => {
    axios.get('/reservations')
      .then(response => {
        setReservations(response.data);
      });
  }, []);

  useEffect(() => {
    const dates = reservations.map(reservation => {
      return {
        from: new Date(reservation.start_date),
        to: new Date(reservation.end_date),
      };
    });
    setBlockedDates(dates);
  }, [reservations]);

  const isBlocked = date =>
    blockedDates.some(d => date >= d.from && date <= d.to);

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      if (isBlocked(date)) {
        return 'blocked';
      } else if (
        start && 
        !end && 
        start.toDateString() === date.toDateString()
      ) {
        return 'selected start';
      } else if (
        start && 
        end &&
        date >= start && 
        date <= end
      ) {
        return 'selected range';
      } else {
        return 'available';
      }
    }
  };

  const handleSelect = date => {
    console.log('Clicked date:', date);
    console.log('Selected start date:', start);
    console.log('Selected end date:', end);
  
    if (isBlocked(date)) {
      console.log('Date is blocked');
      return;
    }
  
    if (!start) {
      console.log('Setting start date:', date);
      setStart(date);
      setEnd(null);
    } else if (start && !end && date > start) {
      console.log('Setting end date:', date);
      setEnd(date);
    } else if (start && end) {
      console.log('Clearing dates');
      onSelectDate({ start: start, end: end });
    }
  };
  

  return (
    <div className="calendar-container">
      <Calendar
        tileClassName={tileClassName}
        onClickDay={handleSelect}
      />
      <style>
        {`
          .calendar-container {
            padding: 20px;
          }

          .react-calendar {
            width: 400px;
            height: 400px;
          }

          .react-calendar__tile {
            border-radius: 50%;
          }

          .blocked {
            background-color: red;
            color: white;
          }

          .available {
            background-color: green;
            color: white;
          }

          .selected.start {
            background-color: blue;
            color: white;
          }

          .selected.range {
            background-color: purple;
            color: white;
          }
        `}
      </style>
    </div>
  );
};

export default BookingCalendar;
