import React from "react";
import { Link } from "react-router-dom";
import BtnAddToCart from "./BtnAddToCart";
import "./ProductCard.styles.scss";
export default function ProductCard({
  imgURL,
  imgAlt,
  name,
  price,
  description,
  id,
}) {
  function truncate(str, n) {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div className="col-md-4 text-center mb-2">
      <div className="card h-100">
        <Link to={`/products/${id}`}>
          <img className="card-img-top" src={imgURL} alt={imgAlt} />
        </Link>
        <div className="card-body">
          <Link to={`/products/${id}`}>
            <h5 className="card-title m-3">{name}</h5>
            {/* <p className="card-text">{truncate(description, 40)}</p> */}
            <p className="card-text ellipsis-text">{description}</p>
            <p className="card-text">{price} SEK</p>
          </Link>
          <BtnAddToCart id={id} />
        </div>
      </div>
    </div>
  );
}