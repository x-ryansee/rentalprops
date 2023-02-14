import React from 'react';

const RentalButtonsHome = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", marginLeft: "5cm", marginRight: "5cm" }}>
    <div style={{ width: "45%", padding: "1rem" }}>Riverfront Idyll in Napa Valley
      <img
        src="https://images.squarespace-cdn.com/content/v1/5db4c936bed191510d3b2128/1632454213657-HD7TWR635SXNJ1BCF2FC/daniel-salgado-MF2KORFe1OE-unsplash.jpg?format=1500w"
        alt="Napa Location"
        style={{ width: "100%", height: "100%" }}
      />
      <button
        style={{
          width: "100%",
          padding: "1rem",
          backgroundColor: "#333",
          color: "#fff",
        }}
        onClick={() => {
          window.location.href = "/napa";
        }}
      >
        Enter
      </button>
    </div>
    <div style={{ width: "45%", padding: "1rem" }}>Alpine Idyll at Lake Tahoe
      <img
        src="https://images.squarespace-cdn.com/content/v1/5db4c936bed191510d3b2128/1632454491067-C1F7672DAH0Q43D0GWHY/mick-haupt-K4T55NmlP0I-unsplash.jpg?format=1500w"
        alt="Tahoe Location"
        style={{ width: "100%", height: "100%" }}
        />
      <button
        style={{
          width: "100%",
          padding: "1rem",
          backgroundColor: "#333",
          color: "#fff",
        }}
        onClick={() => {
          window.location.href = "/tahoe";
        }}
      >
        Enter
      </button>
    </div>
    </div>
  );
};

export default RentalButtonsHome;
