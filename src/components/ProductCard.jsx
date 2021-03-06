import React, { useContext } from "react";
import { Link } from "react-router-dom";
import BtnAddToCart from "./BtnAddToCart";
// import "./ProductCard.styles.scss";
import { ProductsContext } from "../contexts/GlobalContext";

import { ProductCardContainer } from "./ProductCard.styles";

export default function ProductCard({
  imgURL,
  imgAlt,
  name,
  price,
  description,
  id,
}) {
  const { cart } = useContext(ProductsContext);

  return (
    <ProductCardContainer>
      <div className="card-w-100">
        <Link to={`/products/${id}`}>
          <img className="card-img-top" src={imgURL} alt={imgAlt} />
        </Link>
        <div className="card-body">
          <Link to={`/products/${id}`}>
            <h5 className="card-title m-3">{name}</h5>
            <p className="card-text ellipsis-text">{description}</p>
            <p className="card-text">{price} SEK</p>
          </Link>
          <BtnAddToCart
            id={id}
            isDisabled={
              cart.filter(({ stock, quantity }) => stock === quantity)[0]
                ?.id === id
            }
          />
        </div>
      </div>
    </ProductCardContainer>
  );
}
