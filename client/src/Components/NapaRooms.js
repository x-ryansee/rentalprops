import React from 'react';
import '../Styling/NapaRooms.css';
import BedIcon from '@material-ui/icons/Hotel';
import BathtubIcon from '@material-ui/icons/Bathtub';
import KitchenIcon from '@material-ui/icons/Kitchen';
import PeopleIcon from '@material-ui/icons/People';
import RoomIcon from '@material-ui/icons/Room';

const NapaRooms = () => {
  return (
    <div className="napa-rooms-container">
      <h2>Rooms & Beds</h2>
      <div className="napa-rooms-info-container">
        <div className="napa-rooms-info">
          <BedIcon fontSize="large" />
          <h3>Bedrooms: 4 (Sleeps: 8)</h3>
          <p>
            A queen and two twins in the two bedrooms on the second (main) floor.
            <br />
            2 large master suites on the third floor each with king beds.
            <br />
            Every bedroom has an unobstructed panoramic view of the Napa River and off in the
            distance the Eastern Hills and vineyards, with the exception of the
            twin bedroom which has a wonderful view of the wildlife sanctuary
            lagoon and the western hills.
          </p>
        </div>
        <div className="napa-rooms-info">
          <BathtubIcon fontSize="large" />
          <h2>Bathrooms: 3</h2>
          <p>
            2nd Floor Hall Bath: Toilet · Combination tub/shower
            <br />
            3rd Floor Master Bath #1: Toilet · Shower · Oversized tub
            <br />
            3rd Floor Master Bath #2:: Toilet · Combination tub/shower
          </p>
        </div>
        <div className="napa-rooms-info">
          <KitchenIcon fontSize="large" />
          <h2>Kitchen</h2>
          <p>
          Newly remodeled with stainless steel appliances.
          <br />
          Fully stocked with plenty of cookware, coffee maker, blender, toaster, Cuisinart, etc.
          </p>
        </div>
        <div className="napa-rooms-info">
          <PeopleIcon fontSize="large" />
          <h2>Living Room</h2>
          <p>
            Riverview Great Room with living, dining and kitchen sharing one large
            open space.
          </p>
        </div>
        <div className="napa-rooms-info">
          <RoomIcon fontSize="large" />
          <h2>Deck/Patio</h2>
          <p>
            Spacious deck across the back of the house overlooking the Napa River,
            plus another serving the third floor master suites. Patio with large
            propane firepit. Private 38' boat dock.
          </p>
        </div>
        <div className="napa-rooms-info">
          <PeopleIcon fontSize="large" />
          <h2>Dining Area</h2>
          <p>
            Seating for 8 people
            <br />
            Dining area seats eight comfortably plus four more at the kitchen
            counter. Outdoor dining also available on our spacious riverfront deck.
          </p>
        </div>
        <div className="napa-rooms-info">
          <RoomIcon/>
          <h2>Balcony</h2>
        <p>
        Beside the spacious main floor deck there is a third story balcony fronting the River and the eastern hills providing outdoor access to the two third floor master suites.
        </p>
        <RoomIcon/>
        <h2>Lawn/Garden</h2>
        <p>
        Small lawns in front of and behind the house. Biweekly gardening service included.
        </p>
    </div>
    </div>
    </div>
  )
}
export default NapaRooms