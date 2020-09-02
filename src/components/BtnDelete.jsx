import React from 'react'
import {useContext} from 'react'
import { ProductsContext } from "../contexts/GlobalContext";
import { deleteItemFromCart } from "./utilities";

export default function BtnDelete({id}) {
  const { cart, setCart, products } = useContext(ProductsContext);

  return (
      <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => {
              setCart(deleteItemFromCart(cart, products[id]),
              );
            }}>x</button>
  )
}
