import React from "react";

export default function ProductInfo({
  description,
  id,
  images,
  name,
  price,
  rating,
  stock,
}) {
  return (
    <div>
    {console.log(description)}
      <h2>{description}</h2>
      {id}
      {name}
      {price}
      {rating}
      {stock}
    </div>
  );
}

// Rita upp produkt-info med jsx mha props
//Detta är detailed view
// alltså bild, pris mm
