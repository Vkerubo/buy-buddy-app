import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductList() {
  // Declare a state variable called "products" and initialize it to an empty array
  const [products, setProducts] = useState([]);

  // Use the useEffect hook to fetch the list of products from the API and update the "products" state variable
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  // Render the list of products
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} />
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          {/* Use the Link component from react-router-dom to create a clickable link that navigates to the individual product page */}
          <Link to={`/products/${product.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
