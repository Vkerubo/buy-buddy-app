import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar";
import Home from "./Components/Home";
import ProductList from "./Components/ProductList";
import Product from "./Components/Product";
import ShoppingCart from "./Components/ShoppingCart";
import CartContextProvider from "./Contexts/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/products" element={<ProductList />} />
            <Route exact path="/products/:id" element={<Product />} />
            <Route exact path="/cart" element={<ShoppingCart />} />
          </Routes>
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
