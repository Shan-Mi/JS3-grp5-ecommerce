import React, { useContext } from "react";
import ProductList from "../components/ProductList";
import { ProductsContext } from "../contexts/GlobalContext";

import { ProductListPageContainer } from "../components/ProductList.styles";

const ProductListPage = () => {
  const { isLoading } = useContext(ProductsContext);
  return (
    <>
      <h1>Products</h1>
      <ProductList isLoading={isLoading} />
    </>
  );
};

export default ProductListPage;
