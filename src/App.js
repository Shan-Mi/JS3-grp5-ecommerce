import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CheckoutPage from "./pages/CheckoutPage";
import Welcomepage from "./pages/WelcomePage";
import LayoutSimple from "./components/LayoutSimple";

function App() {
  return (
    <div className="App">
      {/* <header>
        <p>E-commerce</p>
      </header> */}

      <Switch>
        <Route path="/" exact>
          <LayoutSimple>
            <Welcomepage />
          </LayoutSimple>
        </Route>

        <Route
          path="/products/:id"
          exact
          render={(props) => (
            <LayoutSimple>
              <ProductDetailPage {...props} />
            </LayoutSimple>
          )}
        />

        <Route path="/products" exact>
          <LayoutSimple>
            <ProductListPage />
          </LayoutSimple>
        </Route>

        <Route path="/checkout" exact>
          <LayoutSimple>
            <CheckoutPage />
          </LayoutSimple>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
