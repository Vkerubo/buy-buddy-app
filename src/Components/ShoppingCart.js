import { useContext, useState } from "react";
import { CartContext } from "../Contexts/CartContext";
import Modal from "react-modal";
import "./ShoppingCart.css";

Modal.setAppElement("#root");

function ShoppingCart() {

    const { cart } = useContext(CartContext); 
          // use context
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

          {cart.map((product) => (
             // Render shopping cart items using map function
            <div key={product.id}>
              <h3>{product.title}</h3> // Render product title
              <p>{product.price}</p> // Render product price
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

export default ShoppingCart;