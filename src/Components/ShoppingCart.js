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
          {cart.map((item) => (
            <div key={`${item.id}-${item.count}`}>
              <h3>{item.title}</h3>
              <img src={item.image} alt={item.title} />
              <p>Price: ${item.price}</p>
              <p>
                Added to cart: {item.count - (item.removedCount || 0)} times
              </p>
              <button onClick={() => handleRemoveFromCart(item)}>
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
