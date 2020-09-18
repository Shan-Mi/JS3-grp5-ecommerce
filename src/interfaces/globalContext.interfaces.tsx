export default interface IGlobalContext {
  products: {};
  reviews: {};
  couponCodes: {};
  isLoading: boolean;
  cart: [];
  setCart: React.Dispatch<React.SetStateAction<[]>>;
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<[]>>;
}
