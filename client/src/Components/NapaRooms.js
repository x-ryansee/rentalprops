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
            Brand new beds, mattresses, linens and nightstands July 2019. The
            house has an entry and 2 car garage on the ground floor. There is a
            queen and two twins in the two bedrooms on the second (main) floor and
            2 large master suites on the third floor each with king beds. Almost
            all of the furniture is brand new as of June/July 2019. Every bedroom
            has an unobstructed panoramic view of the Napa River and off in the
            distance the Eastern Hills and vineyards, with the exception of the
            twin bedroom which has a wonderful view of the wildlife sanctuary
            lagoon and the western hills.
          </p>
        </div>
        <div className="napa-rooms-info">
          <BathtubIcon fontSize="large" />
          <h2>Bathrooms: 3</h2>
          <p>New fixtures 2019.</p>
        </div>
        <div className="napa-rooms-info">
          <KitchenIcon fontSize="large" />
          <h2>Kitchen</h2>
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