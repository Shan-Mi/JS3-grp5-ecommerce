import React from "react";
import { ImStarFull, ImStarEmpty } from "react-icons/im";

export default function ProductReviews({ reviews, id }) {
  function ratingStars(rating) {
    let starRating = [];

    for (let i = 1; i <= rating; i++) {
      starRating.push(<ImStarFull key={i} />);
    }
    if (rating !== 5) {
      const emptyStars = 5 - rating;

      for (let i = 1; i <= emptyStars; i++) {
        starRating.push(<ImStarEmpty key={i} />);
      }
    }
    return starRating;
  }

  function renderReviews() {
    const productReviews = Object.entries(reviews).find(
      (reviewArray) => reviewArray[0] === id
    );
    console.log(productReviews);

    if (productReviews) {
      console.log("there is review");
      return productReviews[1].map((review, index) => {
        const key = index;
        const author = review.author.name;
        const date = review.date;
        const description = review.description;
        const rating = review.rating;
        const title = review.title;

        return (
          <div className="card mb-4" key={key}>
            <div className="card-body">
              <h3 className="card-title">{title}</h3>
              <div> {ratingStars(rating)}</div>

              <p>{description}</p>
            </div>
            <div className="card-footer text-muted">
              Posted: {date} | Author: {author}
            </div>
          </div>
        );
      });
    } else {
      return <p>No reviews for this product</p>;
    }
  }
  return (
    <div>
      <h2>Reviews</h2>
      {reviews && renderReviews()}
    </div>
  );
}

// Hämta reviews om det finns till den produkten
// loopa ut review-cards
