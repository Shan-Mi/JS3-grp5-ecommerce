// länka in ProductList
import React, { useContext } from "react";
import ProductList from "../components/ProductList";
import { ProductsContext } from "../contexts/GlobalContext";

const ProductListPage = () => {
  const { isLoading } = useContext(ProductsContext);
  return (
    <div>
      This is productlistpage
      <ProductList isLoading={isLoading} />
    </div>
  );
};

export default ProductListPage;
