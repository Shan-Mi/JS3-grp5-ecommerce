import React from "react";
import { useContext } from "react";
import { ProductsContext } from "../contexts/GlobalContext";
import { addItemToCart, removeItemFromCart } from "./utilities";
import { FaPlus, FaMinus } from "react-icons/fa";

import IChangeQtyBtn, { Products } from "../interfaces/changeQtyBtn.interface";

interface IProps {
  quantity: number;
  id: number;
  isDisabled: boolean;
}

const BtnIncreaseDecrease: React.FC<IProps> = ({
  quantity,
  id,
  isDisabled,
}: IProps) => {
  const globalContext = useContext(ProductsContext);
  const { cart, setCart, products } = globalContext as IChangeQtyBtn;

  return (
    <div className="d-flex">
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
};

export default BtnIncreaseDecrease;
