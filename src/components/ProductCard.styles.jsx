import styled from "styled-components";

export const ProductCardContainer = styled.div`
  width: 300px;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 1px 0 #3e2020;
  border-radius: 10px;

  .card-img-top {
    width: 100%;
    height: 60vw;
    object-fit: cover;

    @media screen and (min-width: 566px) {
      height: 40vw;
    }

    @media screen and (min-width: 766px) {
      height: 20vw;
    }

    @media screen and (min-width: 900px) {
      height: 15vw;
    }
  }

  .card-w-100 {
    width: 100%;
  }
`;
