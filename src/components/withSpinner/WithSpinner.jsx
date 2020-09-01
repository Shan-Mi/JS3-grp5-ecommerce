import React from "react";

import Spinner from "./Spinner";

const getDisplayName = (Wrappedcomponent) => {
  return Wrappedcomponent.displayName || Wrappedcomponent.name || "component";
};

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  WrappedComponent.displayName = `WithSpinner(${getDisplayName(
    WrappedComponent
  )})`;
  return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
};

export default WithSpinner;
