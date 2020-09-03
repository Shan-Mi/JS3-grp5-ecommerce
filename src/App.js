import React, { useContext } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CheckoutPage from "./pages/CheckoutPage";
import Welcomepage from "./pages/WelcomePage";
import LayoutSimple from "./components/LayoutSimple";
import NotFoundPage from "./pages/NotFoundPage";
import { ProductsContext } from "./contexts/GlobalContext";

function App() {
  const { cart } = useContext(ProductsContext);

  return (
    <div className="App">
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

        <Route
          path="/checkout"
          exact
          render={() =>
            cart.length === 0 ? (
              <Redirect to="/products" />
            ) : (
              <LayoutSimple>
                <CheckoutPage />
              </LayoutSimple>
            )
          }
        />

        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
