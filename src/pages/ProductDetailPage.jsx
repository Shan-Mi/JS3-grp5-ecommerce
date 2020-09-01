import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../contexts/GlobalContext";
import ProductReviews from "../components/ProductReviews";
import ProductInfo from "../components/ProductInfo";

export default function ProductDetailPage() {
  let { id } = useParams();
  const ProductsData = useContext(ProductsContext);
  const { products, reviews, couponCodes, isLoading } = ProductsData;
  id = "16065";
  let product;
  if (products) {
    product = products[id];
  }
  // console.log(products);
  return (
    <div>
      <ProductInfo product={product} />
      <ProductReviews reviews={reviews} />
    </div>
  );
}

// Länka in ProductInfo och ProductReviews
