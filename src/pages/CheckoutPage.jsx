import React, { useState, useContext } from "react";
import CheckoutItemsList from "../components/CheckoutItemsList";
import CustomerOrderForm from "../components/CustomerOrderForm";
import { ProductsContext } from "../contexts/GlobalContext";
import { cartTotalPrice } from "../components/utilities";

export default function CheckoutPage() {
  const ProductsData = useContext(ProductsContext); // using dummy data just for now
  const { cart: cartItems } = ProductsData;
  const [discountPrice, setDiscountPrice] = useState(cartTotalPrice(cartItems));
  return (
    <div>
      This is check out page
      <CheckoutItemsList discountPrice={discountPrice} />
      <CustomerOrderForm discountPrice={discountPrice} setDiscountPrice={setDiscountPrice} />
    </div>
  );
}

// länka in CheckoutItemsList, TotalPrice, CustomerOrderForm
