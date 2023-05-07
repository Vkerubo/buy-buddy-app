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
    // subtract the removed count from the total price
    const removedCount = product.removedCount || 0;
    setTotalPrice(totalPrice - (product.price * (product.count - removedCount)));
  };

  const handleCheckout = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const createCheckoutMessage = () => {
    // use the totalPrice state variable here
    const total = totalPrice.toFixed(2);
    const items = cart.map((item) => ({
      title: item.title,
      count: item.count - (item.removedCount || 0),
      price: item.price,
    }));
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
        {/* display the total price here */}
        <p>Total Price: ${total}</p>
      </div>
    );
  };

  return (
    <div className="shopping-cart">
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items-container">
          <h2>Your Shopping Cart</h2>
          {cart.map((item) => (
            <div className="cart-item" key={`${item.id}-${item.count}`}>
              <img src={item.image} alt={item.title} className="cart-item-img" />
              <div className="cart-item-info">
                <h3 className="cart-item-title">{item.title}</h3>
                <p className="cart-item-price">${item.price}</p>
                <p className="cart-item-count">Added to cart: {item.count - (item.removedCount || 0)} times</p>
                <button className="cart-item-remove" onClick={() => handleRemoveFromCart(item)}>
                  Remove from Cart
                </button>
              </div>
            </div>
          ))}
          {/* display the total price here as well */}
          <p className="cart-total">Total Price: ${totalPrice.toFixed(2)}</p>
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