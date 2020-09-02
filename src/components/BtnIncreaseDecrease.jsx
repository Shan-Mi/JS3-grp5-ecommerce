import React from 'react'
import {useContext} from 'react'
import { ProductsContext } from "../contexts/GlobalContext";
import { addItemToCart, removeItemFromCart} from "./utilities";

export default function BtnIncreaseDecrease({quantity, id}) {
  const { cart, setCart, products } = useContext(ProductsContext);

  return (
    <div>
      <button
            className="btn"
            onClick={() => {
              setCart(removeItemFromCart(cart, products[id]),
              );
            }}>-</button>
        {quantity}
      <button
            className="btn"
            onClick={() => {
              setCart(addItemToCart(cart, products[id]),
              );
            }}>+</button>
    </div>
  )
}
