import { useState , useEffect } from 'react'
import React from "react";
import NapaGallery from "./NapaGallery"


const NapaHome = () => {
  const [napaData, setNapaData] = useState(null);

  useEffect(() => {
    fetch(`/rentals/5`)
      .then((r) => r.json())
      .then((data) => setNapaData(data));
  }, []);

  
  if (!napaData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Napa</h2>
      <NapaGallery/>
      <p>{napaData.name}</p>
      <p>{napaData.about}</p>
      <p>{napaData.amenities}</p>
    </div>
  );
};

export default NapaHome