import React, { useContext } from "react";
import { ProductsContext } from "../contexts/GlobalContext";
import CartItem from "./CartItem";

export default function CartDropDown({ showCart }) {
  const { cart: cartItems } = useContext(ProductsContext);
  console.log(cartItems);
  return (
    cartItems &&
    showCart && (
      <div className="cart-dropdown-container">
        <div className="cart-items-container">
          {cartItems.map(({ images: [{ alt, src }], id, quantity }) => (
            <CartItem key={id} alt={alt} src={src} quantity={quantity} />
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
