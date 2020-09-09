import styled from "styled-components";

export const ProductDetailContainer = styled.div`
  display: flex;
  margin-top: 3rem;
  position: relative;
  flex-direction: column;
  .product-detail-image {
    flex-basis: 50%;
    .product-detail-img {
      max-width: 100%;
    }
  }

  .product-detail-info {
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    span {
      font-size: 2rem;
    }
    h1 {
      margin-bottom: 1rem;
    }
    h5 {
      margin-bottom: 1rem;
    }
    .addToCartBtn {
      @media screen and (max-width: 570px) {
        align-self: center;
        width: 40%;
      }
      @media screen and (max-width: 766px) {
        align-self: left;
        margin-top: 1rem;
        margin-bottom: 1rem;
      }
    }
  }

  @media screen and (min-width: 766px) {
    flex-direction: row;

    .product-detail-info {
      padding-left: 3rem;
    }
    h1 {
      margin-bottom: 4rem;
    }
  }
`;
