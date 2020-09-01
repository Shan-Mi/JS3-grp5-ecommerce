import React from "react";

const CartItem = ({ alt, src, quantity }) => {
  return (
    <div className='cart-item-container'>
      <img src={src.small} alt={alt} />
      <h5>{quantity}</h5>
    </div>
  );
};

export default CartItem;
