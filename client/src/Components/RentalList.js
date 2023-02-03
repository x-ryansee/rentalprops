import React, { useState, useEffect } from 'react';
import NapaDetails from './NapaDetails';
import TahoeDetails from './TahoeDetails';

const RentalList = () => {
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    fetch('/rentals')
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);

  return (
    <div>
      {rentals.map(rental => (
        <NapaDetails key={rental.id} name={rental.name} />
      ))}
      {rentals.map(rental => (
        <TahoeDetails key={rental.id} id={rental.id} />
      ))}
    </div>
  );
};

export default RentalList