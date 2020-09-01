// funktionen totalPrice
import React from "react";

export function cartTotalPrice(cart) {
  const totalPrice =
    cart &&
    Object.entries(cart).reduce((total, product) => {
      const price = product[1].price;

      return total + price;
    }, 0);
  return totalPrice;
}
