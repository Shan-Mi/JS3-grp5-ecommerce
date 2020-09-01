import React from "react";

const checkoutItems = {
  16065: {
    description: "Please don't eat this one... for real!",
    id: 16065,
    images:
      Array[1][
        {
          alt: "an orange painted blue",
          src: {
            large:
              "https://was-reach-hackathon-img.now.sh/mysterious-orange_L.jpg",
            medium:
              "https://was-reach-hackathon-img.now.sh/mysterious-orange_M.jpg",
            small:
              "https://was-reach-hackathon-img.now.sh/mysterious-orange_S.jpg",
          },
        }
      ],
    name: "Mysterious Orange",
    price: 324,
    rating: 4.7,
    stock: 7,
  },
  18272: {
    description:
      "Get this rare pieace of tech that has been hand painted in a matte white finnish!",
    id: 18272,
    images:
      Array[1][
        {
          alt: "a white playstation",
          src: {
            large:
              "https://was-reach-hackathon-img.now.sh/white-playstation_L.jpg",
            medium:
              "https://was-reach-hackathon-img.now.sh/white-playstation_M.jpg",
            small:
              "https://was-reach-hackathon-img.now.sh/white-playstation_S.jpg",
          },
        }
      ],
    name: "White Playstation",
    price: 4595,
    rating: 4.5,
    stock: 2,
  },
  19336: {
    description:
      "Want to look cool whilst listening to some sweet music? Get theese matte black over-the-ear headphones today!",
    id: 19336,
    images:
      Array[1][
        {
          alt: "black hadphones",
          src: {
            large:
              "https://was-reach-hackathon-img.now.sh/black-headphones_L.jpg",
            medium:
              "https://was-reach-hackathon-img.now.sh/black-headphones_M.jpg",
            small:
              "https://was-reach-hackathon-img.now.sh/black-headphones_S.jpg",
          },
        }
      ],
    name: "Black Headphones",
    price: 3426,
    rating: 3.5,
    stock: 200,
  },
};

export default function CheckoutItemsList() {
  return (
    <div>
      <table>
        <thead></thead>
      </table>
    </div>
  );
}
// loopa ut alla produkter som finns i cart-context
