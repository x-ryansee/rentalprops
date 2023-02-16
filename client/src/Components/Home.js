import React from "react";
import VideoBackground from "./VideoBackground";
import RentalButtonsHome from "./RentalButtonsHome";
import Reviews from "./Reviews";


const Home = () => {
    return (
      <div style={{margin: "-80px"}}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
          <VideoBackground style={{ height: '100vh', width: '100vw' }} />
          <h1 style={{ color: "white", textAlign: 'center', position: 'absolute', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1, fontSize: '2.5rem',  }}>
            Beautiful Homes in World Class Destinations
          </h1>
        </div>
        <div
          style={{
            padding: "2rem",
            backgroundColor: "white",
            textAlign: "center",
          }}
        >
<h2 style={{ fontWeight: 'normal', lineHeight: '4.5rem', fontSize: '2rem', width: '850px', maxWidth: '100%', margin: '0 auto' }}>
  Vacation Rentals On The North Shore of Lake Tahoe and in the
  Carneros district of the World Famous Napa Valley
</h2>

        </div>
        <div style={{margin: "70px"}}>
          <RentalButtonsHome />
        </div>
        <div style={{margin: "70px"}}>
          <Reviews />
        </div>
      </div>
    );
  };
  
  export default Home;

