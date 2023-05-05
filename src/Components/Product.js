import { useContext, useState } from "react";
import { CartContext } from "../Contexts/CartContext";

function Product({ product }) {
  const { addToCart } = useContext(CartContext);
  const [count, setCount] = useState(0);

  const handleAddToCart = () => {
    addToCart(product);
    setCount(count + 1);
  };

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Added to Cart: {count} times</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
