import React from "react";
import { useContext } from "react";
import { ProductsContext } from "../contexts/GlobalContext";
import { clearCart } from "./utilities";
// import {BtnClearCartContainer} from './BtnClearCart.styles'

const BtnClearCart = () => {
  const { cart, setCart } = useContext(ProductsContext);

  return (
    <button
      className="btn btn-outline-danger btn-sm"
      onClick={() => {
        setCart(clearCart(cart));
      }}>
      Clear Cart
    </button>
  );
};

export default BtnClearCart;
