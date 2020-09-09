import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import GlobalContext from "./contexts/GlobalContext";

ReactDOM.render(
  <React.StrictMode>
    <GlobalContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalContext>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
