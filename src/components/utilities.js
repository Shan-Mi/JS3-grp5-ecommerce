// funktionen totalPrice
export function cartTotalPrice(cart) {
  const totalPrice =
    cart &&
    Object.entries(cart).reduce((total, product) => {
      const price = product[1].price;
      const qty = product[1].quantity;

      return total + price * qty;
    }, 0);
  return totalPrice;
}

/* functions for cart: adding/ deleting/ emptying */
export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id && cartItem.stock > cartItem.quantity
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // if only 1 item, then remove it
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // otherwise, decrease quantity by 1
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const deleteItemFromCart = (cartItems, cartItemToRemove) => {
  // delete from cart
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};

export const clearCart = (cartItems) => {
  // clear cart
  return cartItems = [];
};

export const getCartItemsCount = (cartItems) => {
  return cartItems
    .map((cartItem) => cartItem.quantity)
    .reduce((sum, init) => sum + init, 0);
};
