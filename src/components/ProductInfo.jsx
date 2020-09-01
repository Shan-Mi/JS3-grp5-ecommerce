import React, { useContext } from "react";
import WithSpinner from "./withSpinner/WithSpinner";
import "./ProductInfo.styles.scss";
import { ProductsContext } from "../contexts/GlobalContext";

const ProductInfo = ({ isLoading, product }) => {
  const {
    description,
    id,
    images: [{ alt, src }],
    name,
    price,
    rating,
    stock,
  } = product;

  const { cart, setCart } = useContext(ProductsContext);
  // cart: an object that stores all items
  // setCart: this id-item count +1, check stock status, conditional disable btn.

  return (
    <>
      <div className="product-detail-container">
        <div className="product-detail-image">
          <img className="product-detail-img" src={src.medium} alt={alt} />
        </div>


        <div className="product-detail-info">
          <h1>{name}</h1>
          <div className="row">
            <div className="col-sm">
              <h5>Price: {price}</h5>
              <h5>Rating: {rating}</h5>
              <h5>Stock: {stock}</h5>
            </div>
            <div className="col-sm">{description}</div>
          </div>
          {/* {id} */}
          <button className="btn btn-primary" onClick={setCart}>Add to Cart</button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm">REVIEW GOES HERE</div>
      </div>
    </>
  );
};

export default WithSpinner(ProductInfo);

/* // Rita upp produkt-info med jsx mha props
// Detta är detailed view
// alltså bild, pris mm
 */
