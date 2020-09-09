import React from "react";
import { useContext } from "react";
import { ProductsContext } from "../contexts/GlobalContext";
import { clearCart } from "./utilities";
import "./BtnClearCart.styles.jsx";
import { MdDeleteForever } from "react-icons/md";
import { DropdownDelBtn, CheckoutDelBtn } from "./BtnClearCart.styles";

const BtnClearCart = ({ dropdownDelBtn }) => {
  const { setCart } = useContext(ProductsContext);

  return dropdownDelBtn ? (
    <DropdownDelBtn
      onClick={() => {
        setCart(clearCart());
      }}
    >
      <MdDeleteForever />
    </DropdownDelBtn>
  ) : (
    <CheckoutDelBtn
      onClick={() => {
        setCart(clearCart());
      }}
    >
      <MdDeleteForever /> Clear Cart
    </CheckoutDelBtn>
  );
};

export default BtnClearCart;
