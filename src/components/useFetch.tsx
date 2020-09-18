import { useState, useEffect } from "react";

// import IFetchedData from "../interfaces/fetchedData.interfaces";


export default function useFetch(url:string, dependencies:[]) {
  const [products, setProducts] = useState({});
  const [reviews, setReviews] = useState({});
  const [couponCodes, setCouponCodes] = useState({})
  const [isLoading, setIsLoading] = useState(true);

  const abortCtrl = new AbortController();
  const opts = { signal: abortCtrl.signal };

  function fetchData() {
    fetch(url, opts)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        // console.log("mounting");
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
    return () => {
      console.log("unmounted");
      abortCtrl.abort();
    };
  }, dependencies); // eslint-disable-line react-hooks/exhaustive-deps

  return [products, reviews, couponCodes, isLoading];
}
