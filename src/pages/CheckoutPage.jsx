import React from "react";
import CheckoutItemsList from "../components/CheckoutItemsList";
import CustomerOrderForm from "../components/CustomerOrderForm";

export default function CheckoutPage() {
  return (
    <div>
      This is check out page
      <CheckoutItemsList />
      <CustomerOrderForm />
    </div>
  );
}

// länka in CheckoutItemsList, TotalPrice, CustomerOrderForm
