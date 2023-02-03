import { useState , useEffect } from 'react'
import React from "react";
import TahoeGallery from "./TahoeGallery"


const TahoeHome = () => {
  const [tahoeData, setTahoeData] = useState(null);

  useEffect(() => {
    fetch(`/rentals/5`)
      .then((r) => r.json())
      .then((data) => setTahoeData(data));
  }, []);

  
  if (!tahoeData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Tahoe</h2>
      <TahoeGallery/>
      <p>{tahoeData.name}</p>
      <p>{tahoeData.about}</p>
      <p>{tahoeData.amenities}</p>
    </div>
  );
};

export default TahoeHome