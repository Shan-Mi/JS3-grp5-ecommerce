import React, { useContext } from "react";
import { ProductsContext } from "../contexts/GlobalContext";
import ProductCard from "./ProductCard";
import WithSpinner from "./withSpinner/WithSpinner";

import {ProductListContainer} from './ProductList.styles'

const ProductList = ({ isLoading }) => {
  const { products } = useContext(ProductsContext);

  return (
    <ProductListContainer >
      {products &&
        Object.values(products).map(
          ({ id, name, price, description, images: [{ alt, src }] }) => {
            return (
              <ProductCard
                key={id}
                id={id}
                name={name}
                price={price}
                description={description}
                imgURL={src.small}
                imgAlt={alt}
              />
            );
          }
        )}
    </ProductListContainer>
  );
};

export default WithSpinner(ProductList);
