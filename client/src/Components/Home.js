import React from "react";
import VideoBackground from "./VideoBackground";
import RentalButtonsHome from "./RentalButtonsHome";
import Reviews from "./Reviews";


const Home = () => {
    return (
      <div style={{margin: "-80px"}}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
          <VideoBackground style={{ height: '100vh', width: '100vw' }} />
          <h1 style={{ color: "white", textAlign: 'center', position: 'absolute', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1, fontSize: '2.5rem' }}>
            Beautiful Homes in World Class Destinations
          </h1>
        </div>
        <div
          style={{
            padding: "2rem",
            backgroundColor: "#eee",
            textAlign: "center",
          }}
        >
<h2 style={{ fontWeight: 'normal', lineHeight: '', fontSize: '2rem', width: '850px', maxWidth: '100%', margin: '0 auto' }}>
  Vacation Rentals On The North Shore of Majestic Lake Tahoe and in the
  Carneros district of the World Famous Napa Valley
</h2>

        </div>
        <RentalButtonsHome />
        <Reviews />
      </div>
    );
  };
  
  export default Home;

