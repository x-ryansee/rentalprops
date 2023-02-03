import { useState , useEffect } from 'react'
import React from "react";


const NapaReviews = () => {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetch("/reviews")
      .then((r) => r.json())
      .then((data) => setReviews(data));
  }, []);

  
  if (!reviews) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id}>
          <h3>{review.title}</h3>
          <p>{review.content}</p>
        </div>
      ))}
    </div>
  );
};

export default NapaReviews