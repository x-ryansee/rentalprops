import { useState , useEffect } from 'react'
import React from "react";
import "../Styling/Review.css";


const Reviews = () => {
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
    <div className="reviews-container">
      <h2 className="reviews-title">Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id} className="review-card">
          <h3 className="review-card-title">{review.title}</h3>
          <p className="review-card-content">{review.content}</p>
          <p className="review-card-name">{review.name}</p>
          <p className="review-card-date">{review.date_stayed}</p>
          <p className="review-card-rental">{review.rental.id}</p>
          <div className="review-card-rating">
            {Array(review.score)
              .fill("⭐️")
              .map((star, index) => (
                <span key={index}>{star}</span>
              ))}
          </div>
        </div>
      ))}
    </div>
  );

              }
export default Reviews