import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";

function ShoppingCart() {
  const { cart } = useContext(CartContext);

  console.log("Cart in ShoppingCart: ", cart);

  return (
    <div>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <h2>Your Shopping Cart</h2>
          {cart.map((product) => (
            <div key={product.id}>
              <h3>{product.title}</h3>
              <img src={product.image} alt={product.title} />
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
