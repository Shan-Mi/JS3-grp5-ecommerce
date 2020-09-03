import React, { useRef, useState, useContext } from "react";
import { ProductsContext } from "../contexts/GlobalContext";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { clearCart } from "./utilities";
import { Link } from "react-router-dom";

export default function CustomerOrderForm({
  discountPrice,
  setDiscountRate,
  discountRate,
}) {
  const { cart, couponCodes, setCart } = useContext(ProductsContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let data = { order: cart };
  const nameInput = useRef();
  const couponInput = useRef();
  const submitBtn = useRef();
  const SEND_ORDER_URL =
    "https://mock-data-api.firebaseio.com/e-commerce/orders/group5/mrmisc.json";

  function handleUserDeliveryInfo() {
    const nameValue = nameInput.current.value;
    const couponValue = couponInput.current.value;
    const orderData = {
      ...data,
      username: nameValue,
      coupon: couponValue,
      price: discountPrice,
      discountRate: discountRate,
      finalPrice: (discountPrice * discountRate).toFixed(2),
    };

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
        setCart(clearCart(cart));
        nameInput.current.value = "";
      });
  }

  function isCouponValid(value) {
    if (Object.keys(couponCodes).includes(value)) {
      setDiscountRate(couponCodes[value].discount);
    }
  }

  function handleOnChange() {
    console.log(submitBtn);
    if (nameInput.current.value.length >= 3 && cart.length !== 0) {
      submitBtn.current.disabled = false;
    } else {
      submitBtn.current.disabled = true;
    }
  }

  return (
    <div className="mt-5">
      <form className="text-left mt-5">
        <hr />
        <div className="form-group row">
          <input
            type="text"
            className="form-control col-3 ml-3 mr-3"
            id="coupon"
            ref={couponInput}
            placeholder="Coupon Code"
          />
          <button
            className="btn btn-outline-primary"
            id="couponCheck"
            onClick={(e) => {
              e.preventDefault();

              isCouponValid(couponInput.current.value);

              if (discountRate !== 1) {
                setDiscountRate(1);
                couponInput.current.value = "";
              }
            }}
          >
            Apply Code
          </button>

          {couponInput.current !== undefined ? (
            <input
              type="text"
              readOnly
              placeholder={`Active code: ${couponInput.current.value}`}
              className="form-check-label col-5 align-middle border-0 text-right"
            />
          ) : (
            <input
              type="text"
              readOnly
              placeholder={`No valid coupon used`}
              className="form-check-label col-5 align-middle border-0 text-right"
            />
          )}
        </div>

        <hr />

        <div className="form-group">
          <label htmlFor="nameInput" className="">
            Fullname
          </label>
          <input
            onChange={handleOnChange}
            type="text"
            required
            className="form-control"
            id="nameInput"
            aria-describedby="nameInput"
            ref={nameInput}
            placeholder="Enter Fullname"
          />
        </div>
        {console.log(cart)}
        <button
          ref={submitBtn}
          disabled={cart.length == 0 ? true : false}
          type="submit"
          className="btn btn-primary"
          variant="primary"
          onClick={(e) => {
            e.preventDefault();

            handlePostMessage();
          }}
        >
          Place Order
        </button>
      </form>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, your order is submitted!</Modal.Body>
        <Modal.Footer>
          <Link to="/products">
            <Button variant="primary">Continue Shopping</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

// input-fält för att fylla i för och efternamn
// en confirm-order-knapp, som gör en POST till API:et
