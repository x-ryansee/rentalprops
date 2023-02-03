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
