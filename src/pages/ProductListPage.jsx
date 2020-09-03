import React, { useContext } from "react";
import ProductList from "../components/ProductList";
import { ProductsContext } from "../contexts/GlobalContext";

const ProductListPage = () => {
  const { isLoading } = useContext(ProductsContext);
  return (
    <div>
      <h1>Products</h1>
      <ProductList isLoading={isLoading} />
    </div>
  );
};

export default ProductListPage;
