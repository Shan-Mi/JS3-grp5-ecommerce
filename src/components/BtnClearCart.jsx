import React from "react";
import { useContext } from "react";
import { ProductsContext } from "../contexts/GlobalContext";
import { clearCart } from "./utilities";
import "./BtnClearCart.styles.scss";
import { MdDeleteForever } from "react-icons/md";
// import {BtnClearCartContainer} from './BtnClearCart.styles'

const BtnClearCart = ({ dropdownDelBtn }) => {
  const { cart, setCart } = useContext(ProductsContext);

  return dropdownDelBtn ? (
    <button
      className="btn dropdown-delBtn"
      onClick={() => {
        setCart(clearCart(cart));
      }}
    >
      <MdDeleteForever />
    </button>
  ) : (
    <button
      className="btn btn-outline-danger text-right"
      onClick={() => {
        setCart(clearCart(cart));
      }}
    >
      <MdDeleteForever /> Clear Cart
    </button>
  );
};

export default BtnClearCart;
