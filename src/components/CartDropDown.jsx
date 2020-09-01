import React, { useContext } from "react";
import { ProductsContext } from "../contexts/GlobalContext";
import CartItem from "./CartItem";

export default function CartDropDown({ showCart }) {
  const { cart: cartItems } = useContext(ProductsContext);
  
  return (
    cartItems &&
    showCart && (
      <div className="cart-dropdown-container">
        <div className="cart-items-container">
          {cartItems.map(({ images: [{ alt, src }], id, quantity, price }) => (
            <CartItem key={id} id={id} alt={alt} src={src} quantity={quantity} price={price} />
          ))}
        </div>
        <button className="btn btn-outline-dark">Go to Checkout</button>
      </div>
    )
  );
}

// loopa ut produkter från cart-context
// visa totalsumma
// ha en "go to checkout"-knapp
