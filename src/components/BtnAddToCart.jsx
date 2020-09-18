import React from "react";
import { useContext } from "react";
import { ProductsContext } from "../contexts/GlobalContext";
import { addItemToCart } from "./utilities";
import { AddToCartBtn } from "./BtnAddToCart.styles";

export default function BtnAddToCart({ id, isDisabled }) {
  const { cart, setCart, products } = useContext(ProductsContext);

  return (
    <AddToCartBtn
      disabled={isDisabled}
      onClick={() => {
        setCart(addItemToCart(cart, products[id]));
      }}
    >
      Add to Cart
    </AddToCartBtn>
  );
}
