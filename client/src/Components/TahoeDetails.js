import { useState , useEffect } from 'react'
import React from "react";

const TahoeDetails = () => {
    const [tahoeData, setTahoeData] = useState(null);
    const rentalName = "alpine";
  
    useEffect(() => {
      fetch("/rentals")
        .then((r) => r.json())
        .then((data) => {
          const foundRental = data.find((rental) => rental.name.toLowerCase() === rentalName.toLowerCase());
          setTahoeData(foundRental);
        });
    }, []);
  
    if (!tahoeData) {
      return <div>Loading...</div>;
    }
  
    return (
      <div style = {{marginLeft: "7cm", marginRight: "7cm"}}>
        <h3 style={{ fontWeight: 200, letterSpacing: '1.5px', marginLeft: 0, textAlign: 'left' }}>This recently remodeled rental home offers a peaceful and quiet location with breathtaking views of Lake Tahoe.</h3>
        <h3 style={{ fontWeight: 200, letterSpacing: '1.5px', marginLeft: 0, textAlign: 'left' }}>Upon entering the home, you will be greeted by an open-plan living, dining, and kitchen area. The kitchen boasts custom cabinetry, leathered granite countertops, a 4-burner Wolf range, and an extra-quiet Bosch dishwasher. Adjacent to the kitchen is a back deck with a propane grill and a supply of firewood. The main level also features a master bedroom with a shower, a second bedroom with two twin beds, and another full bathroom with a tub.</h3>
        <h3 style={{ fontWeight: 200, letterSpacing: '1.5px', marginLeft: 0, textAlign: 'left' }}>The upper level offers a spacious bedroom with a queen bed, a sitting area with a queen sofa bed, and a full bath with a tub. This level also includes a small bedroom with two twin beds that shares the bathroom with the large bedroom. The lower level features a mudroom/laundry room with a front-loading washer and dryer and a door to the garage. The flat driveway can accommodate two large or four small vehicles.</h3>
        <h3 style={{ fontWeight: 200, letterSpacing: '1.5px', marginLeft: 0, textAlign: 'left' }}>Exterior amenities include a horseshoe pit and a propane fire pit (not available in winter). The home is located less than four miles north of the charming town of Tahoe City, near popular trailheads and recreational activities. It is also just a short drive from ski resorts and beaches.</h3>
        <h3 style={{ fontWeight: 200, letterSpacing: '1.5px', marginLeft: 0, textAlign: 'left' }}>The street is quiet at the top and less than a third of a mile from a National Forest trailhead for off-road vehicles. With its fantastic location, modern amenities, and charming decor, this rental home is the perfect choice for your next Lake Tahoe vacation."</h3>
        {/* <p>{tahoeData.name}</p>
      <p>{tahoeData.about}</p>
      <p>{tahoeData.amenities}</p> */}
    </div>
  );
};

export default TahoeDetails
