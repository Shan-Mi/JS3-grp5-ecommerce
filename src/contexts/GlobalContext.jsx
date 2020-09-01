import React, { createContext } from "react";
import useFetch from "../components/useFetch";

// should we write like this: createContext({})??
//maybe then we don't need to destructure data out??
export const ProductssContext = createContext();

const GlobalContext = ({ children }) => {
  const [products, reviews, couponCodes, isLoading] = useFetch(
    "https://mock-data-api.firebaseio.com/e-commerce.json",
    []
  ); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ProductssContext.Provider
      value={{ products, reviews, couponCodes, isLoading }}>
      {children}
    </ProductssContext.Provider>
  );
};

export default GlobalContext;
