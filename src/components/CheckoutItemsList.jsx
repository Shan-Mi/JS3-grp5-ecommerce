import React, { useContext } from "react";
import { ProductsContext } from "../contexts/GlobalContext";
import { cartTotalPrice } from "./utilities";
import BtnIncreaseDecrease from "./BtnIncreaseDecrease";
import BtnDelete from "./BtnDelete";
import BtnClearCart from "./BtnClearCart";
import { Link } from "react-router-dom";

export default function CheckoutItemsList({ discountPrice, discountRate }) {
  const ProductsData = useContext(ProductsContext);
  const { cart: cartItems, products } = ProductsData;

  function renderTableRows() {
    return (
      cartItems &&
      products &&
      cartItems.map(
        ({ id, name, price, quantity, images: [{ alt, src }] }, index) => (
          <tr key={id}>
            <td>
              <BtnDelete id={id} />
            </td>
            <th scope="row" style={{ lineHeight: "38px" }}>
              {index + 1}
            </th>
            <th scope="row" style={{ lineHeight: "38px" }}>
              <img src={src.small} alt={alt} style={imageStyle} />
            </th>
            <td>
              <Link style={{ lineHeight: "38px" }} to={`/products/${id}`}>
                {name}
              </Link>
            </td>
            <td style={{ lineHeight: "38px" }}>
              <BtnIncreaseDecrease
                quantity={quantity}
                id={id}
                isDisabled={products[id].stock === quantity}
              />
            </td>
            <td className="text-right" style={{ lineHeight: "38px" }}>
              {(price * quantity * discountRate).toFixed(2)} SEK
            </td>
          </tr>
        )
      )
    );
  }

  return (
    <div>
      <table className="table table-sm table-hover ">
        <thead className="text-left">
          <tr>
            <th colSpan="6" className="text-right">
              <BtnClearCart />
            </th>
          </tr>
          <tr>
            <th scope="col"></th>
            <th scope="col">#</th>
            <th scope="col"></th>
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
            <td colSpan="6" className="text-right font-weight-bold">
              {discountRate !== 1 ? (
                <small>
                  <span className="discount-price mr-5">
                    Original Price:
                    <del className="font-italic ml-1">
                      {cartTotalPrice(cartItems)} SEK
                    </del>
                    <span className="ml-2">
                      Discount: {((1 - discountRate) * 100).toFixed()}%
                    </span>
                  </span>
                </small>
              ) : (
                <span className="discount-price d-none">{discountPrice}</span>
              )}
              Total Price:
              {" " + (cartTotalPrice(cartItems) * discountRate).toFixed(2)} SEK
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

const imageStyle = {
  float: "left",
  maxHeight: "30px",
  marginTop: "3px",
  objectFit: "cover",
};
