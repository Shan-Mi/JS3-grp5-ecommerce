import React from "react";
import { Link } from "react-router-dom";
import BtnAddToCart from './BtnAddToCart'
export default function ProductCard({
  imgURL,
  imgAlt,
  name,
  price,
  description,
  id,
}) {

  return (
    <div className="col-md-4 text-center mb-2">
      <div className="card">
        <Link to={`/products/${id}`}>
          <img className="card-img-top" src={imgURL} alt={imgAlt} />
        </Link>
        <div className="card-body">
          <Link to={`/products/${id}`}>
            <h5 className="card-title m-3">{name}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">{price}</p>
          </Link>
          <BtnAddToCart id={id}/>              
        </div>
      </div>
    </div>
  );
}

// bygger upp kortet i jsx
// lägg in info från props
//länka in BtnAddToCart
