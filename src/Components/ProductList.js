import { useState, useEffect } from "react";
// Import useState and useEffect hooks from React
import { Link } from "react-router-dom";
// Import Link component from react-router-dom package
function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // Use useEffect hook to fetch data when component mounts
    const fetchProducts = async () => {
      // Define asynchronous function to fetch data
      const response = await fetch("https://fakestoreapi.com/products");
      // Make GET request to API endpoint
      const data = await response.json();
      // Parse response data to JSON
      setProducts(data);
      // Update state with fetched product data
    };

    fetchProducts();
    // Call fetchProducts function
  }, []); // Specify empty dependency array to run effect only on mount

  return (
    <div>
      {products.map(
        (
          product // Render product list using map function
        ) => (
          <div key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </div>
        )
      )}
    </div>
  );
}

export default ProductList;
