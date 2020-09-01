import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CheckoutPage from "./pages/CheckoutPage";
import Welcomepage from "./pages/WelcomePage";

function App() {
  return (
    <div className="App">
      <header>
        <p>E-commerce</p>
      </header>

      <Switch>
        <Route path="/" exact>
          <Welcomepage />
        </Route>

        <Route
          path="/products/:id"
          exact
          render={(props) => <ProductDetailPage {...props} />}
        />

        <Route path="/products" exact>
          <ProductListPage />
        </Route>

        <Route path="/checkout" exact>
          <CheckoutPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
