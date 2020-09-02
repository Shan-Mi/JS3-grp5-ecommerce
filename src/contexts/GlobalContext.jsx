// här lagras alla produkter som kunden lägger i cart
import React, { createContext, useState, useEffect } from "react";
import useFetch from "../components/useFetch";

export const ProductsContext = createContext();

const GlobalContext = ({ children }) => {
  const initialCart = JSON.parse(window.localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(initialCart);
  const [showCart, setShowCart] = useState(false);
  const [products, reviews, couponCodes, isLoading] = useFetch(
    "https://mock-data-api.firebaseio.com/e-commerce.json",
    []
  ); // eslint-disable-line react-hooks/exhaustive-deps

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
      }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default GlobalContext;
