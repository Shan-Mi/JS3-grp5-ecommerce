import React from "react";
import WithSpinner from "./withSpinner/WithSpinner";
import "./ProductInfo.styles.scss";

const ProductInfo = ({ isLoading, product }) => {
  const {
    description,
    id,
    images: [{ alt, src }],
    name,
    price,
    rating,
    stock,
  } = product;

  return (
    <div>
      {description}
      <br />
      {id}
      <br />

      <img className="product-detail-img" src={src.medium} alt={alt} />
      <br />
      {price}
      <br />
      {rating}
      <br />
      {name}
      <br />
      {stock}
      <br />
      {console.log(product)}
    </div>
  );
};

export default WithSpinner(ProductInfo);

// Rita upp produkt-info med jsx mha props
//Detta är detailed view
// alltså bild, pris mm
