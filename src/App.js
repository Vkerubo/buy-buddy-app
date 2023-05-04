import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import ProductList from "./ProductList";
import Product from "./Product";
import ShoppingCart from "./ShoppingCart";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={ProductList} />
          <Route exact path="/products/:id" component={Product} />
          <Route exact path="/cart" component={ShoppingCart} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
