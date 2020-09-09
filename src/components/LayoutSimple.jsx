import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./LayoutSimple.styles.jsx";
import { getCartItemsCount } from "./utilities";
import { ProductsContext } from "../contexts/GlobalContext";
import CartDropDown from "./CartDropDown";
import { FaShoppingCart } from "react-icons/fa";

import { HeaderContainer, MyButton } from "./LayoutSimple.styles";

export default function LayoutSimple({ children }) {
  const { cart, showCart, setShowCart } = useContext(ProductsContext);
  const cartItemsAmount = getCartItemsCount(cart);

  function toggleCartDisplay() {
    setShowCart(!showCart);
  }

  return (
    <div>
      <HeaderContainer>
        <nav className="navbar sticky-top navbar-light bg-light justify-content-between">
          <div>
            <Link to="/" className="navbar-brand">
              Mr. Misc
            </Link>
            <Link to="/products">Products</Link>
          </div>

          <div>
            <button
              className="btn btn-outline-primary my-2 my-sm-0"
              onClick={() => toggleCartDisplay()}
            >
              <FaShoppingCart />
              <span className="cart-count">{cartItemsAmount}</span>
            </button>
            <CartDropDown />
          </div>
        </nav>
      </HeaderContainer>
      <div className="container">{children}</div>
    </div>
  );
}
