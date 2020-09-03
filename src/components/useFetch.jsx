import { useState, useEffect } from "react";

export default function useFetch(url, dependencies) {
  const [products, setProducts] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [couponCodes, setCouponCodes] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  function fetchData() {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then((result) => {
        setProducts(result.products);
        setReviews(result.reviews);
        setCouponCodes(result.couponCodes);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, dependencies);

  return [products, reviews, couponCodes, isLoading];
}
