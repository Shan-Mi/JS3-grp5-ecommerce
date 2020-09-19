import React from "react";
import { useContext } from "react";
import { ProductsContext } from "../contexts/GlobalContext";
import { deleteItemFromCart } from "./utilities";
import { FaTrashAlt } from "react-icons/fa";
import ICartItem from "../interfaces/cartitem.interface";

import IChangeQtyBtn, { Products } from "../interfaces/changeQtyBtn.interface";

interface Props {
  id: number;
}

export default function BtnDelete({ id }: Props) {
  const GlobalContext = useContext(ProductsContext);
  const { cart, setCart, products } = GlobalContext as IChangeQtyBtn;

  return (
    <button
      className="btn btn-outline-danger btn-sm"
      onClick={() => {
        setCart(deleteItemFromCart(cart, products[id]));
      }}
    >
      <FaTrashAlt />
    </button>
  );
}
