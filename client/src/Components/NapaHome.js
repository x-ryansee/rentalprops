import React from "react";
import NapaGallery from "./NapaGallery"
import NapaDetails from "./NapaDetails"
import NapaRooms from "./NapaRooms"


const NapaHome = () => {

  return (
    <div>
      <h2>Napa</h2>
      <NapaGallery/>
      <NapaDetails/>
      <NapaRooms/>
      <button>Reserve</button>
    </div>
  );
};

export default NapaHome