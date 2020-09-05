import React, { useState, useContext } from "react";
import CheckoutItemsList from "../components/CheckoutItemsList";
import CustomerOrderForm from "../components/CustomerOrderForm";
import { ProductsContext } from "../contexts/GlobalContext";
import { cartTotalPrice } from "../components/utilities";

export default function CheckoutPage() {
  const { cart: cartItems } = useContext(ProductsContext);
  const [discountPrice, setDiscountPrice] = useState(cartTotalPrice(cartItems));
  const [discountRate, setDiscountRate] = useState(1);
  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutItemsList
        discountRate={discountRate}
        discountPrice={discountPrice}
        setDiscountPrice={setDiscountPrice}
      />
      <CustomerOrderForm
        setDiscountRate={setDiscountRate}
        discountRate={discountRate}
        discountPrice={discountPrice}
      />
    </div>
  );
}
