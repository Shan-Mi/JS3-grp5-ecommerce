import ICartItem from "./cartitem.interface";

export default interface IChangeQtyBtn {
  products: Products<ICartItem>;
  cart: [];
  setCart: React.Dispatch<React.SetStateAction<ICartItem[]>>;
}

export interface Products<T> {
  [key: number]: T;
}
