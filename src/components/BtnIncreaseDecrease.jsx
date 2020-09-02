import React, { useEffect } from "react";
import { useContext } from "react";
import { ProductsContext } from "../contexts/GlobalContext";
import { addItemToCart, removeItemFromCart, cartTotalPrice } from "./utilities";
import { FaPlus, FaMinus } from 'react-icons/fa';

export default function BtnIncreaseDecrease({
  quantity,
  id,
  setDiscountPrice,
}) {
  const { cart, setCart, products } = useContext(ProductsContext);

  useEffect(() => {
    setDiscountPrice(cartTotalPrice(cart));
  }, [cart, setDiscountPrice]);

  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          setCart(removeItemFromCart(cart, products[id]));
        }}>
        <FaMinus />
      </button>
      {quantity}
      <button
        className="btn"
        onClick={() => {
          setCart(addItemToCart(cart, products[id]));
        }}>
        <FaPlus />
      </button>
    </div>
  );
}
