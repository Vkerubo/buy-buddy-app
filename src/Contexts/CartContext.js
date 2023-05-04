import { createContext, useState } from "react";

//create a new context object
export const CartContext = createContext();
// Define a new component called CartContextProvider that will provide the cart-related data to the rest of the application
const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    // Use the setCart function to update the "cart" state by adding the new product to the array
    setCart([...cart, product]);
  };
};

export default CartContextProvider;
