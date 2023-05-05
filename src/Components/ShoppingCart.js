import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";

function ShoppingCart() {
  const { cart, removeFromCart } = useContext(CartContext);

  console.log("Cart in ShoppingCart: ", cart);

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
  };

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
              <p>Price: {product.price}</p>
              <button onClick={() => handleRemoveFromCart(product)}>
                Remove from Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
