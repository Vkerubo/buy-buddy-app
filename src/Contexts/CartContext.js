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

  const removeFromCart = (product) => {
    // Use the filter() method to create a new array called "updatedCart" that excludes the product with the matching ID
    const updatedCart = cart.filter((item) => item.id !== product.id);
    // Use the setCart function to update the "cart" state with the new "updatedCart" array
    setCart(updatedCart);
  };
  // Use the CartContext.Provider component to provide the "cart", "addToCart", and "removeFromCart" values to any child components that need them
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
