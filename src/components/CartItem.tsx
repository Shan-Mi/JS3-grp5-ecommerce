import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../contexts/GlobalContext";

interface ICartItem {
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IProps {
  alt: string;
  src: { small: string };
  quantity: number;
  id: number;
  price: number;
}

const CartItem: React.FC<IProps> = ({
  alt,
  src,
  quantity,
  id,
  price,
}: IProps) => {
  const { showCart, setShowCart } = useContext(ProductsContext) as ICartItem;

  function toggleCartDisplay() {
    setShowCart(!showCart);
  }
  return (
    <div className="cart-item-container">
      <Link
        to={`/products/${id}`}
        onClick={() => {
          toggleCartDisplay();
        }}
      >
        <img src={src.small} alt={alt} />
      </Link>
      <h5>
        {quantity} x {price}
      </h5>
    </div>
  );
};

export default CartItem;
