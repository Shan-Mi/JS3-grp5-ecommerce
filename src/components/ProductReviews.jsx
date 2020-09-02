import React, { useContext } from "react";

export default function ProductReviews({ reviews, id }) {
  console.log(reviews);
  console.log(id);
  function renderReviews(){
    const productReviews = Object.entries(reviews).find(reviewArray => reviewArray[0] === id)
    console.log(productReviews);
    
    if (productReviews) {
console.log("there is review");
return (
  productReviews[1].map((review,index )=>   {       
      const key = index;
    const author = review.author.name;
    const date = review.date;
    const description = review.description;
    const rating = review.rating;
    const title = review.title;

    return (
      <div key={key}>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{date}</p>
        <p>{rating}</p>
        <p>{author}</p>
      </div>
    );
  } )
)
    }
    else {

    return (
      <p>No review for this product</p>
    )
  }
  }
  return (
    <div>
{reviews && renderReviews()}
      
       </div>
      );
}

// Hämta reviews om det finns till den produkten
// loopa ut review-cards
