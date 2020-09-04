import React from "react";
import { useContext } from "react";
import { ProductsContext } from "../contexts/GlobalContext";
import { addItemToCart, removeItemFromCart } from "./utilities";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function BtnIncreaseDecrease({ quantity, id, isDisabled }) {
  const { cart, setCart, products } = useContext(ProductsContext);

  return (
    <div className='d-flex'>
      <button
        className="btn"
        onClick={() => {
          setCart(removeItemFromCart(cart, products[id]));
        }}
      >
        <FaMinus />
      </button>
      {quantity}
      <button
        className="btn"
        disabled={isDisabled}
        onClick={() => {
          setCart(addItemToCart(cart, products[id]));
        }}
      >
        <FaPlus />
      </button>
    </div>
  );
}
