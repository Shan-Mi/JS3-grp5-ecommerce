import React, { useContext } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetailPage() {
  let { id } = useParams();
  console.log(id)
  return <div>This is detail page</div>;
}

// Länka in ProductInfo och ProductReviews
