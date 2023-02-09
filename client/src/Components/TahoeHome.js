import React from "react";
import TahoeGallery from "./TahoeGallery"
import TahoeDetails from "./TahoeDetails"
import TahoeRooms from "./TahoeRooms"
import VideoBackground from "./VideoBackground";
import { Link } from 'react-router-dom';

const TahoeHome = () => {

  return (
    <div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <VideoBackground style={{ height: '100vh', width: '100vw' }} />
          <h1 style={{ color: "white", textAlign: 'center', position: 'absolute', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1, fontSize: '4rem' }}>
            Alpine Idyll
          </h1>
        </div>
      <TahoeRooms/>
      <TahoeDetails/>
      <TahoeGallery/>
      <Link to="/reserve">
        <button>Reserve</button>
    </Link>
    </div>
  );
};

export default TahoeHome