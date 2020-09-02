import React, { useRef } from "react";

export default function CustomerOrderForm() {
  const nameInput = useRef();
  const emailInput = useRef();
  const addressInput = useRef();
  const couponInput = useRef();

  return (
    <div className="mt-5">
      <hr />
      <form className="text-left mt-5">
        <div class="form-group">
          <label for="nameInput" className="">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="nameInput"
            aria-describedby="nameInput"
            ref={nameInput}
            placeholder="Enter Forename and Aftername"
          />
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            ref={emailInput}
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        <div class="form-group">
          <label for="addressInput">Delivery Address</label>
          <input
            type="text"
            class="form-control"
            id="addressInput"
            ref={addressInput}
            placeholder="Address"
          />
        </div>

        <div class="form-group row">
          <input
            type="text"
            class="form-control col-2 ml-3"
            id="coupon"
            ref={couponInput}
            placeholder="Coupon"
          />
          <label
            class="form-check-label col ml-5 align-middle"
            for="couponCheck">
            <input type="checkbox" class="form-check-input " id="couponCheck" />
            Check me out
          </label>
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            console.log(couponInput.current.value);
          }}>
          Submit
        </button>
      </form>
    </div>
  );
}

// input-fält för att fylla i för och efternamn
// en confirm-order-knapp, som gör en POST till API:et
