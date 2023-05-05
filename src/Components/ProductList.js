import { useState, useEffect } from "react";
import Product from "./Product";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortingOption, setSortingOption] = useState("none");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = () => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSortingOptionChange = (event) => {
    setSortingOption(event.target.value);
  };

  const sortProducts = (products, option) => {
    switch (option) {
      case "none":
        return products;
      case "low-to-high":
        return products.sort((a, b) => a.price - b.price);
      case "high-to-low":
        return products.sort((a, b) => b.price - a.price);
      default:
        return products;
    }
  };

  const sortedProducts = sortProducts(filteredProducts, sortingOption);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button onClick={handleSearch}>Search</button>
        <select value={sortingOption} onChange={handleSortingOptionChange}>
          <option value="none">Sort by price</option>
          <option value="low-to-high">Low to high</option>
          <option value="high-to-low">High to low</option>
        </select>
      </div>
      <h2>Product List</h2>
      {sortedProducts.length === 0 ? (
        <p>Sorry, the product you are looking for is not available.</p>
      ) : (
        sortedProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))
      )}
    </div>
  );
}

export default ProductList;
