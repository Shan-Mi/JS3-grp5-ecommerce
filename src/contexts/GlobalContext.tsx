// här lagras alla produkter som kunden lägger i cart
import React, { createContext, useState, useEffect, ReactNode } from "react";
import useFetch from "../components/useFetch";

type Props = {
  children: ReactNode;
};

//eslint-disable-next-line
export const ProductsContext = createContext({});

const GlobalContext = (props: Props) => {
  const FETCH_URL = "https://mock-data-api.firebaseio.com/e-commerce.json";
  const initialCart: [] = JSON.parse(localStorage.getItem("cart")!) || [];
  const [cart, setCart] = useState(initialCart);
  const [showCart, setShowCart] = useState(false);
  const [products, reviews, couponCodes, isLoading] = useFetch(FETCH_URL, []);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        reviews,
        couponCodes,
        isLoading,
        cart,
        setCart,
        showCart,
        setShowCart,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default GlobalContext;
