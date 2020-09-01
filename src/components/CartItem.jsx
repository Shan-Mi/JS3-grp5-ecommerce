import React from "react";
import { Link } from "react-router-dom";

const CartItem = ({ alt, src, quantity, id, price }) => {
  return (
    <div className="cart-item-container">
      <Link to={`/products/${id}`}>
        <img src={src.small} alt={alt} />
      </Link>
      <h5>{quantity} x {price}</h5>
    </div>
  );
};

export default CartItem;
