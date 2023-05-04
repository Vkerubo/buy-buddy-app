import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Components/NavBar";
import Home from "./Components/Home";
import ProductList from "./Components/ProductList";
import Product from "./Components/Product";
import ShoppingCart from "./Components/ShoppingCart";

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
