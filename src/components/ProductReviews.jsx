import React from "react";

export default function ProductReviews({ reviews, id }) {
  console.log(reviews);
  console.log(id);
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
              <p> {rating}/5</p>
              <p>{description}</p>
            </div>
        <div className="card-footer text-muted">Posted: {date} Author {author}</div>
          </div>

     );
      });
    } else {
      return <p>No review for this product</p>;
    }
  }
  return <div>
    <h2>Reviews</h2> 
    {reviews && renderReviews()}</div>;
}

// Hämta reviews om det finns till den produkten
// loopa ut review-cards
