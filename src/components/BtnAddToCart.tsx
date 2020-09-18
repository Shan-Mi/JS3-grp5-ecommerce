import React from "react";
import { useContext } from "react";
import { ProductsContext } from "../contexts/GlobalContext";
import { addItemToCart } from "./utilities";
import { AddToCartBtn } from "./BtnAddToCart.styles";
import IGlobalContext from "../interfaces/globalContext.interfaces";
import ICartItem from "../interfaces/cartitem.interface";

interface Props {
  id: number;
  isDisabled: boolean;
}

interface IAddBtn {
  products: Products<ICartItem>;
  cart: [];
  setCart: React.Dispatch<React.SetStateAction<ICartItem[]>>;
}

interface Products<T>{
  [key: number]:T
}

const BtnAddToCart: React.FC<Props> = (props: Props) => {
  const globalContext = useContext(ProductsContext);
  const { cart, setCart, products } = globalContext as IAddBtn;
  const { id, isDisabled } = props;
  const currentCartItems:ICartItem[] = addItemToCart(cart, products[id])

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
