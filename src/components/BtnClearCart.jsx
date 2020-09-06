import React from "react";
import { useContext } from "react";
import { ProductsContext } from "../contexts/GlobalContext";
import { clearCart } from "./utilities";
import "./BtnClearCart.styles.scss";
import { MdDeleteForever } from "react-icons/md";

const BtnClearCart = ({ dropdownDelBtn }) => {
  const { setCart } = useContext(ProductsContext);

  return dropdownDelBtn ? (
    <button
      className="btn dropdown-delBtn"
      onClick={() => {
        setCart(clearCart());
      }}
    >
      <MdDeleteForever />
    </button>
  ) : (
    <button
      className="btn btn-outline-danger text-right"
      onClick={() => {
        setCart(clearCart());
      }}
    >
      <MdDeleteForever /> Clear Cart
    </button>
  );
};

export default BtnClearCart;
