import React from "react";
import { useContext } from "react";
import { ProductsContext } from "../contexts/GlobalContext";
import { addItemToCart } from "./utilities";

export default function BtnAddToCart({ id }) {
  const { cart, setCart, products } = useContext(ProductsContext);
  return (
    <button
      className="btn btn-primary addToCartBtn"
      onClick={() => {
        setCart(addItemToCart(cart, products[id]));
      }}
    >
      Add to Cart
    </button>
  );
}