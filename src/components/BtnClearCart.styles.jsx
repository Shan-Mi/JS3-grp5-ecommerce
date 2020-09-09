import styled from "styled-components";

export const DropdownDelBtn = styled.div`
  place-self: center;
  margin-bottom: -1rem;
  padding: 0;
  position: relative;

  &:hover::before {
    content: "Delete All";
    position: absolute;
    font-style: italic;
    right: -68px;
    top: 2px;
  }

  svg {
    filter: invert(35%) sepia(34%) saturate(3756%) hue-rotate(331deg)
      brightness(86%) contrast(102%);
    font-size: 25px;

    &:hover {
      transform: scale(1.3);
      transition: transform 0.1s ease-in-out;
    }
    transition: transform 0.1s ease-in-out;
  }
`;

export const CheckoutDelBtn = styled.div`
  float: right;
  cursor: pointer;
  color: #dc3545;
`;
