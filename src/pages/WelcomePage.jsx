import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div>
      <h1>Welcome to our E-commerce shop!</h1>
      <Link to="/products">
        <button className="btn btn-primary mt-5">Go to products page</button>
      </Link>
      <Link to="/checkout">
        <button className="btn btn-info mt-5 ml-3">Go to Checkout page</button>
      </Link>
    </div>
  );
};

export default WelcomePage;
