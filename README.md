# JS3 Group Assignment - E-Commerce Shop

## Name: Mr Misc
### [Demo-live-version](https://mrmisc-live.herokuapp.com/)

### Tools and etc
- create-react-app
- React-router-dom
- [React Icons](https://react-icons.github.io/react-icons/)
- hooks (useState, useEffect, useContext, useRef, useParams...)
- eslint
- prettier
- heroku

## !Important
`npm install` to get everything work for the very first time.

## context & useContext

Create a globalContext to store fetched data and cart related useState variables.
```js
const GlobalContext = ({ children }) => {
  const FETCH_URL = "https://mock-data-api.firebaseio.com/e-commerce.json";
  const initialCart = JSON.parse(window.localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(initialCart);
  const [showCart, setShowCart] = useState(false);
  const [products, reviews, couponCodes, isLoading] = useFetch(FETCH_URL, [FETCH_URL]);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        reviews,
        couponCodes,
        isLoading,
        cart,
        setCart,
        showCart,
        setShowCart,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
```

```js
ReactDOM.render(
  <React.StrictMode>
    <GlobalContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalContext>
  </React.StrictMode>,
  document.getElementById("root")
);
```

Then BrowserRouter and its children are wrapped inside this globalComponent, so they can get access to these value (i.e. products, cart, etc.).

```js
export default function ProductDetailPage() {
  const { id } = useParams();
  const ProductsData = useContext(ProductsContext);
  const { products, reviews, isLoading } = ProductsData;
  let product;
  if (products) {
    product = products[id];
  }
  return (
    <div>
      <ProductInfo product={product} isLoading={isLoading} />
      <ProductReviews reviews={reviews} id={id} />
    </div>
  );
}
```

Whenever we need to use these data which are stored in globalContext, we take that/these specific pieces of data out and use them to build our own components by passing them dowm as props or use them directly in that component.

```js
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

export const clearCart = () => [];

export const getCartItemsCount = (cartItems) => {
  return cartItems
    .map((cartItem) => cartItem.quantity)
    .reduce((sum, init) => sum + init, 0);
};
```
All JavaScript functions are stored inside of this utilities.js file to make our folder structure clear and neat.

