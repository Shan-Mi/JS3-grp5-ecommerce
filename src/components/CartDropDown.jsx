import React, { useContext } from "react";
import { ProductsContext } from "../contexts/GlobalContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { cartTotalPrice } from "./utilities";
import BtnClearCart from "./BtnClearCart";
import { CartDropDownContainer } from "./LayoutSimple.styles";

export default function CartDropDown() {
  const { cart: cartItems, showCart, setShowCart } = useContext(
    ProductsContext
  );

  function toggleCartDisplay() {
    setShowCart(!showCart);
  }

  return (
    cartItems &&
    showCart && (
      <CartDropDownContainer>
        <div className="cart-items-container">
          {cartItems.map(({ images: [{ alt, src }], id, quantity, price }) => (
            <CartItem
              key={id}
              id={id}
              alt={alt}
              src={src}
              quantity={quantity}
              price={price}
            />
          ))}
        </div>
        <div className="cart-dropdown-btns-container">
          <p className="font-weight-bold">
            Total Price: {cartTotalPrice(cartItems)} SEK
          </p>
          <Link to="/checkout">
            <button
              className="btn btn-outline-dark"
              onClick={() => {
                toggleCartDisplay();
              }}
            >
              Go to Checkout
            </button>
          </Link>
          <BtnClearCart dropdownDelBtn={true} />
        </div>
      </CartDropDownContainer>
    )
  );
}
