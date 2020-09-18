import React, { createContext, useState, useEffect } from "react";
import useFetch from "../components/useFetch";
//eslint-disable-next-line
export const ProductsContext = createContext({});
const GlobalContext = (props) => {
  const FETCH_URL = "https://mock-data-api.firebaseio.com/e-commerce.json";
  const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(initialCart);
  const [showCart, setShowCart] = useState(false);
  const [products, reviews, couponCodes, isLoading] = useFetch(FETCH_URL, []);
  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return React.createElement(
    ProductsContext.Provider,
    {
      value: {
        products,
        reviews,
        couponCodes,
        isLoading,
        cart,
        setCart,
        showCart,
        setShowCart,
      },
    },
    props.children
  );
};
export default GlobalContext;
