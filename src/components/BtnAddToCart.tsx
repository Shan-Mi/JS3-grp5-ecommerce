import React from "react";
import { useContext } from "react";
import { ProductsContext } from "../contexts/GlobalContext";
import { addItemToCart } from "./utilities";
import { AddToCartBtn } from "./BtnAddToCart.styles";
import IGlobalContext from "../interfaces/globalContext.interfaces";
import ICartItem from "../interfaces/cartitem.interface";

interface IProps {
  id: number;
  isDisabled: boolean;
}

import IChangeQtyBtn, { Products } from "../interfaces/changeQtyBtn.interface";

const BtnAddToCart: React.FC<IProps> = ({ id, isDisabled }: IProps) => {
  const globalContext = useContext(ProductsContext);
  const { cart, setCart, products } = globalContext as IChangeQtyBtn;
  const currentCartItems: ICartItem[] = addItemToCart(cart, products[id]);

  return (
    <AddToCartBtn
      disabled={isDisabled}
      onClick={() => {
        setCart && setCart(currentCartItems);
      }}
    >
      Add to Cart
    </AddToCartBtn>
  );
};
export default BtnAddToCart;
