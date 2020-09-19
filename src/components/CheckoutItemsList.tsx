import React, { useContext } from "react";
import { ProductsContext } from "../contexts/GlobalContext";
import { cartTotalPrice } from "./utilities";
import BtnIncreaseDecrease from "./BtnIncreaseDecrease";
import BtnDelete from "./BtnDelete";
import BtnClearCart from "./BtnClearCart";
import { Link } from "react-router-dom";
import { StringLiteral } from "typescript";

interface ICheckoutItemsList {
  products: Products<ICartItem>;
  cart: [];
}

interface Products<T> {
  [key: number]: T;
}

interface IProps {
  discountPrice: number;
  discountRate: number;
}

interface ICartItem {
  quantity: number;
  id: number;
  price: number;
  name: string;
  stock: number;
  images: [
    {
      alt: string;
      src: { small: string };
    }
  ];
}

const CheckoutItemsList = ({ discountPrice, discountRate }: IProps) => {
  const { cart: cartItems, products } = useContext(
    ProductsContext
  ) as ICheckoutItemsList;

  function renderTableRows() {
    return (
      cartItems &&
      products &&
      cartItems.map(
        (
          { id, name, price, quantity, images: [{ alt, src }] }: ICartItem,
          index
        ) => (
          <tr key={id}>
            <td>
              <BtnDelete id={id} />
            </td>
            <th scope="row">{index + 1}</th>
            <th scope="row">
              <img
                src={src.small}
                alt={alt}
                style={{
                  float: "left",
                  maxHeight: "30px",
                  marginTop: "5px",
                  objectFit: "cover",
                }}
              />
            </th>
            <td>
              <Link to={`/products/${id}`}>{name}</Link>
            </td>
            <td>
              <BtnIncreaseDecrease
                quantity={quantity}
                id={id}
                isDisabled={products[id].stock === quantity}
              />
            </td>
            <td className="text-right">
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
            <th className="text-right">
              <BtnClearCart dropdownDelBtn />
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
            <td className="text-right font-weight-bold">
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
};

// const imageStyle = {
//   float: "left",
//   maxHeight: "30px",
//   marginTop: "5px",
//   objectFit: "cover",
// };

export default CheckoutItemsList;
