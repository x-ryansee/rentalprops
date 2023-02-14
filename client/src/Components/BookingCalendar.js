import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';

const BookingCalendar = ({ selectedStart, selectedEnd, onSelectDate }) => {
  const [reservations, setReservations] = useState([]);
  const [blockedDates, setBlockedDates] = useState([]);

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
        selectedStart && 
        !selectedEnd && 
        selectedStart.toDateString() === date.toDateString()
      ) {
        return 'selected start';
      } else if (
        selectedStart && 
        selectedEnd &&
        date >= selectedStart && 
        date <= selectedEnd
      ) {
        return 'selected range';
      } else {
        return 'available';
      }
    }
  };

  const handleSelect = date => {
    if (isBlocked(date)) return;
    if (!selectedStart) {
      onSelectDate({ start: date, end: null });
    } else if (selectedStart && !selectedEnd && date > selectedStart) {
      onSelectDate({ start: selectedStart, end: date });
    } else {
      onSelectDate({ start: date, end: null });
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
