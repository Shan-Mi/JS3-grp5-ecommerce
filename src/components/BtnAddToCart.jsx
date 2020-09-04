import React from "react";
import { useContext } from "react";
import { ProductsContext } from "../contexts/GlobalContext";
import { addItemToCart } from "./utilities";

export default function BtnAddToCart({ id, isDisabled }) {
  const { cart, setCart, products } = useContext(ProductsContext);

  return (
    <button
      className="btn btn-primary addToCartBtn"
      disabled={isDisabled}
      onClick={() => {
        setCart(addItemToCart(cart, products[id]));
      }}
    >
      Add to Cart
    </button>
  );
}
