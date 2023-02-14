import React from 'react';
import '../Styling/TahoeRooms.css';
import BedIcon from '@material-ui/icons/Hotel';
import BathtubIcon from '@material-ui/icons/Bathtub';
import KitchenIcon from '@material-ui/icons/Kitchen';
import PeopleIcon from '@material-ui/icons/People';
import RoomIcon from '@material-ui/icons/Room';

const TahoeRooms = () => {
  return (
    <div className="tahoe-rooms-container">
      <h2>Rooms & Beds</h2>
      <div className="tahoe-rooms-info-container">
        <div className="tahoe-rooms-info">
          <BedIcon fontSize="large" />
          <h3>Bedrooms: 4 (Sleeps: 8)</h3>
          <p>
            Main Level Master Bedroom: Queen
            <br />
            Bedroom 2: Two Twins
            <br />
            Upper Level Master Bedroom: Queen · Pull-out sofa (queen)
            <br />
            Bedroom 4: Two Twins
          </p>
        </div>
        <div className="tahoe-rooms-info">
          <BathtubIcon fontSize="large" />
          <h2>Bathrooms: 3</h2>
          <p>
            Main Level Hall Bath: Toilet · Combination tub/shower
            <br />
            Main Level Master Bath: Toilet · Shower
            <br />
            Upper Level Bath: Toilet · Combination tub/shower
          </p>
        </div>
        <div className="tahoe-rooms-info">
          <KitchenIcon fontSize="large" />
          <h2>Kitchen</h2>
          <p>
            Apron front large ceramic sink, Bosch quiet dishwasher, custom
            cabinetry, leathered granite countertops, rustic stone backsplash,
            hand selected Sierra stone flooring, custom banquette seats 6.
          </p>
        </div>
        <div className="tahoe-rooms-info">
          <PeopleIcon fontSize="large" />
          <h2>Living Room</h2>
          <p>Two couches and a large chair.  Television equipt with AppleTV</p>
        </div>
        <div className="tahoe-rooms-info">
          <RoomIcon fontSize="large" />
          <h2>Deck/Patio</h2>
          <p>
            Spacious Lakeview Deck for use during late spring, summer and early
            fall. Not available in winter due to snow. Dining table, umbrella,
            6 chairs plus two Adirondacks.
          </p>
        </div>
        <div className="tahoe-rooms-info">
          <PeopleIcon fontSize="large" />
          <h2>Dining Area</h2>
          <p>
            Main dining table for 8 people.
            <br />
            Additional dining table for up to 6 people in the kitchen.
            <br />
            Outdoor table seats 6 when weather permits.
          </p>
        </div>
          </div>
          </div>
  )}

  export default TahoeRooms
