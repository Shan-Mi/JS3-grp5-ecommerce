// här lagras alla produkter som kunden lägger i cart
import React, { createContext, useState, useEffect } from "react";
import useFetch from "../components/useFetch";

export const ProductsContext = createContext();

const GlobalContext = ({ children }) => {
  const FETCH_URL = "https://mock-data-api.firebaseio.com/e-commerce.json";
  const initialCart = JSON.parse(window.localStorage.getItem("cart")) || [];
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
      {children}
    </ProductsContext.Provider>
  );
};

export default GlobalContext;
