import { createContext, useState } from "react";

//create a new context object
export const CartContext = createContext();

// Define a new component called CartContextProvider that will provide the cart-related data to the rest of the application
const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    console.log("Adding to cart: ", product);
    console.log("Cart before adding: ", cart);

    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      // If the product is already in the cart, increment its count
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].count++;
      setCart(updatedCart);
    } else {
      // If the product is not in the cart, add it with a count of 1
      setCart([...cart, { ...product, count: 1 }]);
    }

    console.log("Cart after adding: ", cart);
  };

  const removeFromCart = (product) => {
    console.log("Removing from cart: ", product);

    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      // If the product is in the cart, decrement its count by 1
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].count--;

      // If the count reaches 0, remove the product from the cart
      if (updatedCart[existingProductIndex].count === 0) {
        updatedCart.splice(existingProductIndex, 1);
      }

      setCart(updatedCart);
    }

    console.log("Cart after removing: ", cart);
  };

  // Use the CartContext.Provider component to provide the "cart", "addToCart", and "removeFromCart" values to any child components that need them
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
