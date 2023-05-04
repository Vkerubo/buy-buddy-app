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

  // Define a function called "addToCart" that takes a product object as an argument and adds it to the shopping cart in local storage
  const addToCart = (product) => {
    // Check if there is an existing cart in local storage
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    // Add the new product to the existing cart
    const updatedCart = [...existingCart, product];
    // Store the updated cart in local storage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Render the list of products with a "View Details" clickable link and an "Add to Cart" button for each product
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} />
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          {/* Add an "Add to Cart" button that calls the "addToCart" function when clicked */}
          <button onClick={() => addToCart(product)}>Add to Cart</button>
          {/* Use the Link component from react-router-dom to create a clickable link that navigates to the individual product page */}
          <Link to={`/products/${product.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
