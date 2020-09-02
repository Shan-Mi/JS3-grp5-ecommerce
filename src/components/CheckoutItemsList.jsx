import React, { useContext } from "react";
import { ProductsContext } from "../contexts/GlobalContext";
import { cartTotalPrice } from "./utilities";
import BtnIncreaseDecrease from "./BtnIncreaseDecrease";
import BtnDelete from "./BtnDelete";
import BtnClearCart from "./BtnClearCart";

export default function CheckoutItemsList({ discountPrice, discountRate }) {
  const ProductsData = useContext(ProductsContext); // using dummy data just for now
  const { cart: cartItems } = ProductsData;
  // const cart = checkoutItems;
  // const cartItems = window.localStorage.getItem('cart')

  function renderTableRows() {
    return (
      cartItems &&
      cartItems.map(({ id, name, price, quantity }, index) => (
        <tr key={id}>
          <td>
            <BtnDelete id={id} />
          </td>
          <th scope="row">{index + 1}</th>
          <td>{name}</td>
          <td>
            <BtnIncreaseDecrease quantity={quantity} id={id} />
          </td>
          <td className="text-right">
            {(price * quantity * discountRate).toFixed(2)} SEK
          </td>
        </tr>
      ))
      /* Object.entries(cart).map((product, index) => {
        const key = product[1].id;
        const name = product[1].name;
        const price = product[1].price;

        return (
          <tr key={key}>
            <th scope="row">{index + 1}</th>
            <td>{name}</td>
            <td className="text-right">{price} SEK</td>
          </tr>
        );
      }) */
    );
  }

  return (
    <div>
      <table className="table table-sm table-hover ">
        <thead className="text-left">
          <tr>
            <th scope="col">
              <BtnClearCart />
            </th>
            <th scope="col">#</th>
            <th scope="col">Product Name</th>
            <th scope="col">Quantity</th>
            <th scope="col" className="text-right">
              Price
            </th>
          </tr>
        </thead>
        <tbody className="text-left">{cartItems && renderTableRows()}</tbody>
        <tfoot>
          <tr>
            <td colSpan="5" className="text-right font-weight-bold">
              {discountRate !== 1 ? (
                <small>
                  <span className="discount-price mr-5">
                    Original Price:
                    <del className="font-italic ml-1">{discountPrice} SEK</del>
                    <span className="ml-2">Discount: {discountRate}</span>
                  </span>
                </small>
              ) : (
                <span className="discount-price d-none">{discountPrice}</span>
              )}
              Total Price:
              {(cartTotalPrice(cartItems) * discountRate).toFixed(2)} SEK
              {/* Total Price: {discountPrice} SEK */}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
// loopa ut alla produkter som finns i cart-context
