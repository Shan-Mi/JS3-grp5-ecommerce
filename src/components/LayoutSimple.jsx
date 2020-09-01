import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./LayoutSimple.styles.scss";
import { getCartItemsCount } from "./utilities";
import { ProductsContext } from "../contexts/GlobalContext";
import CartDropDown from "./CartDropDown";

export default function LayoutSimple({ children }) {
  const { cart } = useContext(ProductsContext);
  const cartItemsAmount = getCartItemsCount(cart);
  const [showCart, setShowCart] = useState(false);

  function toggleCartDisplay() {
    setShowCart(!showCart);
  }

  return (
    <header>
      <nav className="navbar navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          ShopName
        </Link>
        <button
          className="btn btn-outline-primary my-2 my-sm-0"
          onClick={() => toggleCartDisplay()}>
          Cart<span className="cart-count">{cartItemsAmount}</span>
        </button>

        <CartDropDown showCart={showCart} />
      </nav>
      <div className="container">{children}</div>
    </header>
  );
}

// lägg in header med namn på webbsidan och en cart-knapp
