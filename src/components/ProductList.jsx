import React, { useContext } from "react";
import { ProductsContext } from "../contexts/GlobalContext";
//  const ProductsData = useContext(ProductsContext);
// const { products, reviews, couponCodes, isLoading } = ProductsData;

export default function ProductList() {
  const ProductsData = useContext(ProductsContext);
  const { products } = ProductsData;

  console.log(products);

  return <div></div>;
}

// Loopa ut produkterna
// kompnenten ProductCard
