import { useContext, useState } from "react";
import { CartContext } from "../Contexts/CartContext";
import "./Product.css";

function Product({ product }) {
  const { addToCart } = useContext(CartContext);
  const [count, setCount] = useState(0);
  const [showDescription, setShowDescription] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setCount(count + 1);
  };

  const handleShowDescription = (event) => {
    event.preventDefault();
    setShowDescription(!showDescription);
  };

  return (
    <div className="grid-item">
      <h2>{product.title}</h2>
      <div className="product-img">
        <img src={product.image} alt={product.title} />
      </div>
      <p>
        <a href="/" onClick={handleShowDescription} className={showDescription ? "link-active" : ""}>
          {showDescription ? "Hide Description" : "See Description"}
        </a>
      </p>
      {showDescription && (
        <p className="description-active">{product.description}</p>
      )}
      <p>Price: ${product.price}</p>
      <p>Added to Cart: {count} times</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
