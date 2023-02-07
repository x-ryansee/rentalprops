import React from "react";
import TahoeGallery from "./TahoeGallery"
import TahoeDetails from "./TahoeDetails"
import TahoeRooms from "./TahoeRooms"
const TahoeHome = () => {

  return (
    <div>
      <h2>Tahoe</h2>
      <TahoeGallery/>
      <TahoeDetails/>
      <TahoeRooms/>
      <button>Reserve</button>
    </div>
  );
};

export default TahoeHome