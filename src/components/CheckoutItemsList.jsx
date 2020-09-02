import React, { useContext } from "react";
import { ProductsContext } from "../contexts/GlobalContext";
// import { cartTotalPrice } from "./utilities";
import BtnIncreaseDecrease from "./BtnIncreaseDecrease";
import BtnDelete from "./BtnDelete";
import BtnClearCart from "./BtnClearCart";

export default function CheckoutItemsList({discountPrice, setDiscountPrice}) {
  const ProductsData = useContext(ProductsContext); // using dummy data just for now
  const { cart: cartItems } = ProductsData;
  // const cart = checkoutItems;
  // const cartItems = window.localStorage.getItem('cart')

  function renderTableRows() {
    return (
      cartItems &&
      cartItems.map(({ id, name, price, quantity }, index) => (
        <tr key={id}>
          <td><BtnDelete id={id} /></td>
          <th scope="row">{index + 1}</th>
          <td>{name}</td>
          <td><BtnIncreaseDecrease quantity={quantity} id={id} setDiscountPrice={setDiscountPrice} /></td>
          <td className="text-right">{price * quantity} SEK</td>
        </tr>
      ))
      /* Object.entries(cart).map((product, index) => {
        const key = product[1].id;
        const name = product[1].name;
        const price = product[1].price;

        return (
          <tr key={key}>
            <th scope="row">{index + 1}</th>
            <td>{name}</td>
            <td className="text-right">{price} SEK</td>
          </tr>
        );
      }) */
    );
  }

  return (
    <div>
      <table className="table table-sm table-hover ">
        <thead className="text-left">
          <tr>
            <th scope="col"><BtnClearCart /></th>
            <th scope="col">#</th>
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
            <td colSpan="5" className="text-right font-weight-bold">
              {/* Total Price: {cartTotalPrice(cartItems)} SEK */}
              Total Price: {discountPrice} SEK
              <span className='discount-price d-none'>{discountPrice}</span>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
// loopa ut alla produkter som finns i cart-context


// const checkoutItems = {
//   16065: {
//     description: "Please don't eat this one... for real!",
//     id: 16065,
//     images: [
//       {
//         alt: "an orange painted blue",
//         src: {
//           large:
//             "https://was-reach-hackathon-img.now.sh/mysterious-orange_L.jpg",
//           medium:
//             "https://was-reach-hackathon-img.now.sh/mysterious-orange_M.jpg",
//           small:
//             "https://was-reach-hackathon-img.now.sh/mysterious-orange_S.jpg",
//         },
//       },
//     ],
//     name: "Mysterious Orange",
//     price: 324,
//     rating: 4.7,
//     stock: 7,
//   },
//   18272: {
//     description:
//       "Get this rare pieace of tech that has been hand painted in a matte white finnish!",
//     id: 18272,
//     images: [
//       {
//         alt: "a white playstation",
//         src: {
//           large:
//             "https://was-reach-hackathon-img.now.sh/white-playstation_L.jpg",
//           medium:
//             "https://was-reach-hackathon-img.now.sh/white-playstation_M.jpg",
//           small:
//             "https://was-reach-hackathon-img.now.sh/white-playstation_S.jpg",
//         },
//       },
//     ],
//     name: "White Playstation",
//     price: 4595,
//     rating: 4.5,
//     stock: 2,
//   },
//   19336: {
//     description:
//       "Want to look cool whilst listening to some sweet music? Get theese matte black over-the-ear headphones today!",
//     id: 19336,
//     images: [
//       {
//         alt: "black hadphones",
//         src: {
//           large:
//             "https://was-reach-hackathon-img.now.sh/black-headphones_L.jpg",
//           medium:
//             "https://was-reach-hackathon-img.now.sh/black-headphones_M.jpg",
//           small:
//             "https://was-reach-hackathon-img.now.sh/black-headphones_S.jpg",
//         },
//       },
//     ],
//     name: "Black Headphones",
//     price: 3426,
//     rating: 3.5,
//     stock: 200,
//   },
// };