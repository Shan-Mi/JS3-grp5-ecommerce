import ICartItem from "../interfaces/cartitem.interface";

export const cartTotalPrice = (cartItems: ICartItem[]) => {
  return cartItems
    .map(({ quantity, price }) => quantity * price)
    .reduce((sum, init) => sum + init, 0);
};

/* functions for cart: adding/ deleting/ emptying */
export const addItemToCart = (
  cartItems: Array<ICartItem>,
  cartItemToAdd: ICartItem
): Array<ICartItem> => {
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

export const removeItemFromCart = (
  cartItems: Array<ICartItem>,
  cartItemToRemove: ICartItem
) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // if only 1 item, then remove it
  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // otherwise, decrease quantity by 1
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const deleteItemFromCart = (
  cartItems: Array<ICartItem>,
  cartItemToRemove: ICartItem
) => {
  // delete from cart
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};

export const clearCart = () => [];

export const getCartItemsCount = (cartItems: Array<ICartItem>) => {
  return cartItems
    .map((cartItem) => cartItem.quantity)
    .reduce((sum, init) => sum + init, 0);
};
