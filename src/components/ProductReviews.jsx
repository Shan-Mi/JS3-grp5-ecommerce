import React from "react";

export default function ProductReviews({ reviews, id }) {
  console.log(reviews);
  console.log(id);
  return (
    <div>
      {reviews &&
        Object.entries(reviews).map((review, index) => {
          const productId = review[0];

          if (productId === id) {
            const key = productId + indexedDB;
            const author = review[1][0].author.name;
            const date = review[1][0].date;
            const description = review[1][0].description;
            const rating = review[1][0].rating;
            const title = review[1][0].title;

            console.log(review[1]);

            return (
              <div key={key}>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{date}</p>
                <p>{rating}</p>
                <p>{author}</p>
              </div>
            );
          } else {
            return;
          }
        })}
    </div>
  );
}

// Hämta reviews om det finns till den produkten
// loopa ut review-cards
