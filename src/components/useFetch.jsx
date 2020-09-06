import { useState, useEffect } from "react";

export default function useFetch(url, dependencies) {
  const [products, setProducts] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [couponCodes, setCouponCodes] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const abortCtrl = new AbortController();
  const opts = { signal: abortCtrl.signal };

  function fetchData() {
    fetch(url, opts)
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
      })
      .catch((error) => console.error(error.message));
  }

  useEffect(() => {
    fetchData();
    return () => abortCtrl.abort();
  }, dependencies); // eslint-disable-line react-hooks/exhaustive-deps

  return [products, reviews, couponCodes, isLoading];
}
