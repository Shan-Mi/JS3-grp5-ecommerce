import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./LayoutSimple.styles.scss";
import { getCartItemsCount } from "./utilities";
import { ProductsContext } from "../contexts/GlobalContext";
import CartDropDown from "./CartDropDown";

export default function LayoutSimple({ children }) {
  const { cart, showCart, setShowCart } = useContext(ProductsContext);
  const cartItemsAmount = getCartItemsCount(cart);

  function toggleCartDisplay() {
    setShowCart(!showCart);
  }

  return (
    <div>
      <header className="stickyheader">
        <nav className="navbar sticky-top navbar-light bg-light">
          <Link to="/" className="navbar-brand">
            ShopName
          </Link>
          <button
            className="btn btn-outline-primary my-2 my-sm-0"
            onClick={() => toggleCartDisplay()}>
            Cart<span className="cart-count">{cartItemsAmount}</span>
          </button>

          <CartDropDown />
        </nav>
      </header>
      <div className="container">{children}</div>
    </div>
  );
}

// lägg in header med namn på webbsidan och en cart-knapp
