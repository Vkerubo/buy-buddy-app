import { useContext, useState } from "react";
import { CartContext } from "../Contexts/CartContext";
import Modal from "react-modal";
import "./ShoppingCart.css";

Modal.setAppElement("#root");

function ShoppingCart() {
  const { cart, removeFromCart } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
  };

  const handleCheckout = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const createCheckoutMessage = () => {
    const items = cart.map((item) => ({
      title: item.title,
      count: item.count - (item.removedCount || 0),
      price: item.price,
    }));
    const total = cart.reduce(
      (acc, item) => acc + (item.count - (item.removedCount || 0)) * item.price,
      0
    );
    return (
      <div>
        <p>Your Order:</p>
        <ol>
          {items.map((item) => (
            <li key={item.title}>
              {item.title} ({item.count} x ${item.price}) = $
              {(item.count * item.price).toFixed(2)}
            </li>
          ))}
        </ol>
        <p>Total Price: ${total.toFixed(2)}</p>
      </div>
    );
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
          <button className="checkout" onClick={handleCheckout}>
            Checkout
          </button>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={handleCloseModal}
            shouldCloseOnOverlayClick={false} // This line prevents the modal from closing on overlay click
            className="modal"
            overlayClassName="overlay"
          >
            <h2>Checkout</h2>
            <p>{createCheckoutMessage()}</p>
            <button onClick={handleCloseModal}>Close</button>
            <button>Proceed to Pay</button>
          </Modal>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
