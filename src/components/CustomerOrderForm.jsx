import React, { useRef, useState, useContext } from "react";
import { ProductsContext } from "../contexts/GlobalContext";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CustomerOrderForm({
  discountPrice,
  // setDiscountPrice,
  setDiscountRate,
  discountRate,
}) {
  const { cart, couponCodes } = useContext(ProductsContext);
  // const [disabledClick, setDisabledClick] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let data = { order: cart };
  const nameInput = useRef();
  const couponInput = useRef();
  const SEND_ORDER_URL =
    "https://mock-data-api.firebaseio.com/e-commerce/orders/group5/nametobedecided.json";
  // need a decend name, lol

  function handleUserDeliveryInfo() {
    const nameValue = nameInput.current.value; // string
    const couponValue = couponInput.current.value;
    const orderData = {
      ...data,
      username: nameValue,
      coupon: couponValue,
      price: discountPrice,
      discountRate: discountRate,
      finalPrice: (discountPrice * discountRate).toFixed(2),
    };
    // console.log(nameValue, emailValue, addressValue, couponValue);
    console.log(orderData);
    return orderData;
  }

  function handlePostMessage() {
    const orderData = handleUserDeliveryInfo();
    console.log(orderData);

    const url = SEND_ORDER_URL;

    fetch(url, {
      method: "POST",
      body: JSON.stringify(orderData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data is sent");
        console.log(data);
        handleShow();
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
      // setDisabledClick(true);
    }
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
            placeholder="Enter first name and last name"
          />
        </div>

        <div className="form-group row">
          <input
            type="text"
            className="form-control col-2 ml-3"
            id="coupon"
            ref={couponInput}
            placeholder="Coupon"
          />
          <label
            className="form-check-label col-2 ml-5 align-middle"
            htmlFor="couponCheck"
          >
            <input
              type="checkbox"
              className="form-check-input "
              id="couponCheck"
              // disabled={disabledClick}
              onClick={() => {
                // console.log(data);
                isCouponValid(couponInput.current.value);
                // setDisabledClick(true)
                if (discountRate !== 1) {
                  setDiscountRate(1);
                  couponInput.current.value = "";
                }
              }}
            />
            Check me out
          </label>
          {couponInput.current !== undefined ? (
            <input
              type="text"
              readOnly
              placeholder={`You have chosen to use coupon ${couponInput.current.value}`}
              className="form-check-label col-4 align-middle form-control "
            />
          ) : (
            <input
              type="text"
              readOnly
              placeholder={`Not valid coupon`}
              className="form-check-label col-4 align-middle form-control "
            />
          )}
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          variant="primary"
          onClick={(e) => {
            e.preventDefault();
            // console.log(couponInput.current.value);

            handlePostMessage();
          }}
          /* onClick={() => {
            if (window.confirm("Are you sure you wish to delete this item?"))
              this.onCancel();
          }}*/
        >
          Submit
        </button>

        <>
          {/*
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
     */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, your order is submitted!</Modal.Body>
            <Modal.Footer>
              <Button variant="primary" /* onClick={handleClose} */>
                Go back home
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </form>
    </div>
  );
}

// input-fält för att fylla i för och efternamn
// en confirm-order-knapp, som gör en POST till API:et
