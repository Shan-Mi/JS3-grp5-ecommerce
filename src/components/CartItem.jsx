import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../contexts/GlobalContext";

const CartItem = ({ alt, src, quantity, id, price }) => {
  const { showCart, setShowCart } = useContext(ProductsContext);

  function toggleCartDisplay() {
    setShowCart(!showCart);
  }
  return (
    <div className="cart-item-container">
      <Link
        to={`/products/${id}`}
        onClick={() => {
          toggleCartDisplay();
        }}>
        <img src={src.small} alt={alt} />
      </Link>
      <h5>
        {quantity} x {price}
      </h5>
    </div>
  );
};

export default CartItem;
