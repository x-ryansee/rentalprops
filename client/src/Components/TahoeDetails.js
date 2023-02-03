import { useState , useEffect } from 'react'
import React from "react";

const TahoeDetails = () => {
  const [tahoeData, setTahoeData] = useState(null);
  const rentalName = "alpine";

  useEffect(() => {
    fetch("/rentals")
      .then((r) => r.json())
      .then((data) => {
        const foundRental = data.find((rental) => rental.name.toLowerCase() === rentalName.toLowerCase());
        setTahoeData(foundRental);
      });
  }, []);

  if (!tahoeData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Tahoe Details</h2>
      <p>{tahoeData.name}</p>
      <p>{tahoeData.about}</p>
      <p>{tahoeData.amenities}</p>
    </div>
  );
};

export default TahoeDetails
