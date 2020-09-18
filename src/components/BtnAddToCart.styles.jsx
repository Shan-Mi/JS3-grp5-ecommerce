import styled from "styled-components";

export const AddToCartBtn = styled.button`
  padding: 10px 20px;
  margin-top: 2rem;
  background-color: darkslategray;
  border: none;
  color: white;
  font-size: 14px;
  border-radius: 2px;

  &:hover {
    transform: scale(1.1);
    transition: transform 20ms ease-in-out;
  }
`;
