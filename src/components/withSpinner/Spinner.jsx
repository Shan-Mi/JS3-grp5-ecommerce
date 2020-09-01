import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./Spinner.styles";

// spinner is going to be a presentational component
const Spinner = () => (
  <SpinnerOverlay>
    <SpinnerContainer />
  </SpinnerOverlay>
);

export default Spinner;
