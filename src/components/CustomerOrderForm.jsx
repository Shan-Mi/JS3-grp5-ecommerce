import React, { useRef, useState, useContext } from "react";
import { ProductsContext } from "../contexts/GlobalContext";

export default function CustomerOrderForm({
  discountPrice,
  setDiscountPrice,
  setDiscountRate,
  discountRate,
}) {
  const { cart, couponCodes } = useContext(ProductsContext);
  const [disabledClick, setDisabledClick] = useState("");

  let data = { order: cart };
  const nameInput = useRef();
  // const emailInput = useRef();
  // const addressInput = useRef();
  const couponInput = useRef();
  const SEND_ORDER_URL =
    "https://mock-data-api.firebaseio.com/e-commerce/orders/group5/nametobedecided.json";
  // need a decend name, lol

  function handleUserDeliveryInfo() {
    const nameValue = nameInput.current.value; // string
    // const emailValue = emailInput.current.value;
    // const addressValue = addressInput.current.value;
    const couponValue = couponInput.current.value;
    data = {
      ...data,
      username: nameValue,
      // email: emailValue,
      // address: addressValue,
      coupon: couponValue,
      price: discountPrice,
      discountRate: discountRate,
    };
    // console.log(nameValue, emailValue, addressValue, couponValue);
    console.log(data);
  }

  function handlePostMessage() {
    const url = SEND_ORDER_URL;
    const data = {
      //
      // take out cart and userinfo, besides if user has valid coupon, we are going to reduce total amount, make that into a new obj and json.stringify it.
    };

    fetch(url, {
      method: "post",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        // messageInputField.current.value = "";
        // empty all input area and localstorage
        // BLACKFRIDAY
      });
  }

  function isCouponValid(value) {
    // return Object.keys(couponCodes).includes(value);
    if (Object.keys(couponCodes).includes(value)) {
      // console.log(couponCodes[value].discount); // discount rate
      setDiscountRate(couponCodes[value].discount);
      setDiscountPrice(
        (discountPrice * couponCodes[value].discount).toFixed(2)
      );
      setDisabledClick(true);
      // console.log(disabledClick);
    }
    // now can check if it's valid coupon, then need to do the math.
  }

  return (
    <div className="mt-5">
      <hr />
      <form className="text-left mt-5">
        <div className="form-group">
          <label htmlFor="nameInput" className="">
            Name
          </label>
          <input
            type="text"
            required
            className="form-control"
            id="nameInput"
            aria-describedby="nameInput"
            ref={nameInput}
            placeholder="Enter Forename and Aftername"
          />
        </div>

        {/* <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            required
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            ref={emailInput}
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="addressInput">Delivery Address</label>
          <input
            type="text"
            required
            className="form-control"
            id="addressInput"
            ref={addressInput}
            placeholder="Address"
          />
        </div> */}

        <div className="form-group row">
          <input
            type="text"
            className="form-control col-2 ml-3"
            id="coupon"
            ref={couponInput}
            placeholder="Coupon"
          />
          <label
            className="form-check-label col ml-5 align-middle"
            htmlFor="couponCheck"
            disabled={disabledClick}>
            <input
              type="checkbox"
              className="form-check-input "
              id="couponCheck"
              disabled={disabledClick}
              onClick={() => {
                console.log(data);
                // console.log(isCouponValid(couponInput.current.value));
                isCouponValid(couponInput.current.value);
                // TODO: check if it is valid coupon, if so reduce total amount;
                // PROBLEM: how to unclick and recalculate discount price.
              }}
            />
            Check me out
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            // console.log(couponInput.current.value);
            handleUserDeliveryInfo();
            //handlePostMessage
          }}>
          Submit
        </button>
      </form>
    </div>
  );
}

// input-fält för att fylla i för och efternamn
// en confirm-order-knapp, som gör en POST till API:et
