import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import BtnAddToCart from './BtnAddToCart'
import { ProductsContext } from "../contexts/GlobalContext";
import { addItemToCart, removeItemFromCart, getCartItemsCount } from "./utilities";

export default function ProductCard({
  imgURL,
  imgAlt,
  name,
  price,
  description,
  id,
}) {
  const { cart, setCart, products } = useContext(ProductsContext);
  // const cartItemsAmount = getCartItemsCount(cart);

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
          {/* <BtnAddToCart />               */}
          <button
            className="btn btn-primary"
            onClick={() => {
              setCart(addItemToCart(cart, products[id]),
              );
            }}>
            Add to Cart
          </button>{" "}
        </div>
      </div>
    </div>
  );
}

// bygger upp kortet i jsx
// lägg in info från props
//länka in BtnAddToCart
