import React from "react";
import { useContext } from "react";
import { ProductsContext } from "../contexts/GlobalContext";
import { clearCart } from "./utilities";
import "./BtnClearCart.styles.jsx";
import { MdDeleteForever } from "react-icons/md";
import { DropdownDelBtn, CheckoutDelBtn } from "./BtnClearCart.styles";
import ICartItem from "../interfaces/cartitem.interface";

interface IClearBtn {
  setCart: React.Dispatch<React.SetStateAction<null[]>>;
}

interface Props {
  dropdownDelBtn: boolean;
}

const BtnClearCart = (props: Props) => {
  const globalContext = useContext(ProductsContext);
  const { setCart } = globalContext as IClearBtn;

  const { dropdownDelBtn } = props;
  
  return dropdownDelBtn ? (
    <DropdownDelBtn
      onClick={() => {
        setCart(clearCart([]));
      }}
    >
      <MdDeleteForever />
    </DropdownDelBtn>
  ) : (
    <CheckoutDelBtn
      onClick={() => {
        setCart(clearCart([]));
      }}
    >
      <MdDeleteForever /> Clear Cart
    </CheckoutDelBtn>
  );
};

export default BtnClearCart;
