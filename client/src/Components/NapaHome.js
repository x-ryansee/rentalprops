import React from "react";
import NapaGallery from "./NapaGallery"
import NapaDetails from "./NapaDetails"
import NapaRooms from "./NapaRooms"
import myImage from '../IMG_3962.jpeg';
import { Link } from 'react-router-dom';




const NapaHome = () => {
    return (
      <div>
        <div style={{ position: 'relative' }}>
          <img src={myImage} alt="My Image" width= "1000px"/>
          <h1 style={{ color: "white", textAlign: 'center', position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 1, fontSize: '4rem' }}>
              Napa Idyll
            </h1>
        </div>
        <NapaRooms />
        <NapaDetails />
        <NapaGallery />
        <Link to="/reserve">
          <button>Reserve</button>
        </Link>
      </div>
    );
  };
  

export default NapaHome