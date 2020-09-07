import React, { useContext } from "react";
import WithSpinner from "./withSpinner/WithSpinner";
import "./ProductInfo.styles.scss";
import BtnAddToCart from "./BtnAddToCart";
import { ProductsContext } from "../contexts/GlobalContext";

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
  const { cart } = useContext(ProductsContext);
  return (
    <>
      <div className="product-detail-container">
        <div className="product-detail-image">
          <img className="product-detail-img" src={src.medium} alt={alt} />
        </div>

        <div className="product-detail-info">
          <h1>{name}</h1>
          <div className="row">
            <div className="col-sm">
              <h5>Price: {price} SEK</h5>
              <h5>Rating: {rating}/5</h5>
              <h5>Stock: {stock}</h5>
            </div>
            <div className="col-sm mb-1">{description}</div>
          </div>
          <BtnAddToCart
            id={id}
            isDisabled={
              cart.filter(({ stock, quantity }) => stock === quantity)[0]
                ?.id === id
            }
          />
        </div>
      </div>
    </>
  );
};

export default WithSpinner(ProductInfo);
