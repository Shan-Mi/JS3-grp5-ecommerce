import React from "react";
import { Link } from "react-router-dom";

import { MyButton } from "../components/LayoutSimple.styles";

import { WelcomePageContainer } from "./WelcomePage.styles";

const WelcomePage = () => {
  return (
    <WelcomePageContainer>
      <h1>Welcome to our E-commerce shop!</h1>
      <Link to="/products">
        <MyButton>Go to products page</MyButton>
      </Link>
    </WelcomePageContainer>
  );
};

export default WelcomePage;
