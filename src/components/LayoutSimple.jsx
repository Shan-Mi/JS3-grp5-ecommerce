import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./LayoutSimple.styles.scss";
import { getCartItemsCount } from "./utilities";

import { ProductsContext } from "../contexts/GlobalContext";
export default function LayoutSimple({ children }) {
  const { cart } = useContext(ProductsContext);
  const cartItemsAmount = getCartItemsCount(cart);

  return (
    <header>
      <nav className="navbar navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          ShopName
        </Link>
        <button className="btn btn-outline-primary my-2 my-sm-0">
          Cart<span className="cart-count">{cartItemsAmount}</span>
        </button>
      </nav>
      <div className="container">{children}</div>
    </header>
  );
}

// lägg in header med namn på webbsidan och en cart-knapp
