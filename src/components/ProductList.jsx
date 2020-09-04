import React, { useContext } from "react";
import { ProductsContext } from "../contexts/GlobalContext";
import ProductCard from "./ProductCard";
import WithSpinner from "./withSpinner/WithSpinner";

const ProductList = ({ isLoading }) => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="row">
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
              ></ProductCard>
            );
          }
        )}
    </div>
  );
};

export default WithSpinner(ProductList);
