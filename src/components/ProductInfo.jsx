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
          <h5>
            <span>Description: </span>
            {description}
          </h5>
          <h5>
            <span>Price: </span>
            {price}
          </h5>
          <h5>
            <span>Rating: </span>
            {rating}
          </h5>
          <h5>
            <span>Stock: </span>
            {stock}
          </h5>
          {/* {id} */}
          <button onClick={setCart}>Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default WithSpinner(ProductInfo);

/* // Rita upp produkt-info med jsx mha props
// Detta är detailed view
// alltså bild, pris mm
 */
