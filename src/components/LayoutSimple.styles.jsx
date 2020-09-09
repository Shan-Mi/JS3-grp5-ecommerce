import styled from "styled-components";

export const MyButton = styled.button`
  padding: 10px 20px;
  background-color: #b8b8ff;
  border-color: #b8b8ff;
  font-size: 16px;
`;
// .btn {
//   position: relative;

//   .cart-count {
//     position: absolute;
//     top: 0;
//   }
// }

export const CartDropDownContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 60px;
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 430px;
  display: flex;
  padding: 10px 20px;
  border: 1px solid black;
  background-color: white;
  justify-content: space-evenly;
  z-index: 5;

  p {
    margin-top: 0.5rem;
    margin-bottom: 0.2rem;
  }

  .cart-items-container {
    height: 295px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;

    .cart-item-container {
      display: flex;
      justify-content: space-around;
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;
      // margin: -5px;

      a {
        flex-basis: 50%;
      }

      img {
        width: 50%;
        float: left;
        max-height: 30px;
        object-fit: cover;
      }

      h5 {
        flex-basis: 50%;
        text-align: left;
        font-size: 1rem;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      }
    }
  }
  .cart-dropdown-btns-container {
    display: flex;
    flex-direction: column;
    .btn.dropdown-delBtn {
      padding: 0;
    }
  }
`;

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  background-color: #ddd;
  height: 4rem;
  display: flex;
  align-items: center;

  nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 1rem;
    font-size: 24px;

    a {
      &:first-of-type {
        margin-right: 2rem;
      }

      &:hover {
        font-style: italic;
        transition: font-style 200ms ease-in-out;
      }
    }
  }
`;

// .ellipsis-text {
//   text-overflow: ellipsis;
//   overflow: hidden;
//   white-space: nowrap;
// }

// th,
// td {
//   line-height: 38px;
// }

// tbody > tr > td > button {
//   margin-bottom: 5px;
// }
