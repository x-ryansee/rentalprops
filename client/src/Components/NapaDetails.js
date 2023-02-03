import { useState , useEffect } from 'react'
import React from "react";

const NapaDetails = () => {
  const [napaData, setNapaData] = useState(null);
  const rentalName = "napa";

  useEffect(() => {
    fetch("/rentals")
      .then((r) => r.json())
      .then((data) => {
        const foundRental = data.find((rental) => rental.name.toLowerCase() === rentalName.toLowerCase());
        setNapaData(foundRental);
      });
  }, []);

  if (!napaData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Napa Details</h2>
      <p>{napaData.name}</p>
      <p>{napaData.about}</p>
      <p>{napaData.amenities}</p>
    </div>
  );
};

export default NapaDetails
