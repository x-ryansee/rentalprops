import { useState , useEffect } from 'react'
import React from "react";

const NapaDetails = () => {
  const [napaData, setNapaData] = useState(null);
  const rentalName = "napa";

  useEffect(() => {
    fetch("/rentals")
      .then((r) => r.json())
      .then((data) => {
        const foundRental = data.find((rental) => rental.name.toLowerCase() === rentalName.toLowerCase());
        setNapaData(foundRental);
      });
  }, []);

  if (!napaData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3 style={{ fontWeight: 200, letterSpacing: '1.5px', marginLeft: 0, textAlign: 'left' }}>Nestled in the Carneros region, this rental home offers the best of both worlds with its proximity to both the Napa and Sonoma valleys. Located away from the hustle and bustle of the city, this home is just 15 minutes from downtown Napa and 20 minutes from Sonoma Plaza, providing a peaceful retreat. The home is just a stone's throw away from several world-class wineries, with Etude and Calmere being just a five and six-minute drive away respectively. Enjoy breathtaking views of the Napa River, watch the water birds on the protected wetlands, and relax by the fire pit, all from the comfort of your own home.</h3>
      <h3 style={{ fontWeight: 200, letterSpacing: '1.5px', marginLeft: 0, textAlign: 'left' }}>This home is perfect for wine enthusiasts, sailors, birdwatchers, fishermen, and outdoor enthusiasts. With four bedrooms and three bathrooms, the home can accommodate up to eight guests. The two large master suites feature new king beds and overlook the Napa River and the Eastern hills. Both masters have separate access to a large balcony and have been recently refurbished with new furniture and appliances. The queen bedroom also has views of the river and the Eastern hills, while the fourth bedroom features twin beds and has a view to the west.</h3>
      <h3 style={{ fontWeight: 200, letterSpacing: '1.5px', marginLeft: 0, textAlign: 'left' }}>The home features a spacious deck with comfortable lounge seating, a propane barbecue grill, and an outdoor dining table that seats eight. The back yard has a verdant lawn and a concrete patio with a large fire pit, as well as a gangway leading to a 38' deepwater dock. Take a hike on the trail across the street at the Napa/Sonoma Wildlife Refuge and observe the local wildlife from the comfort of your home.</h3>
      <h3 style={{ fontWeight: 200, letterSpacing: '1.5px', marginLeft: 0, textAlign: 'left' }}>Located in the Carneros region, the home is close to several popular attractions, including Etude Winery, Calmere Estate Winery, Poseidon Vineyards, Bouchaine Winery, and the Carneros Inn & Spa. With its close proximity to San Francisco Bay, the weather in the Carneros region is known to be more moderate, making it ideal for Chardonnay and Pinot Noir varietals. Whether you're looking for a fine dining experience or a casual lunch, there's something for everyone in the Carneros region.</h3>
      
      
      {/* <p>{napaData.name}</p>
      <p>{napaData.about}</p>
      <p>{napaData.amenities}</p> */}
    </div>
  );
};

export default NapaDetails
