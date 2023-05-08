import { useState, useEffect } from "react";
import Product from "./Product";
import AddProductForm from "./AddProductForm";
import "./ProductList.css";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortingOption, setSortingOption] = useState("none");
  const [showAddProductForm, setShowAddProductForm] = useState(false);

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

  const handleSearchInputKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
    setFilteredProducts([...filteredProducts, newProduct]);
    setShowAddProductForm(false);
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
    <div className="product-list-container">
      <div className="search-and-sort-container">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchInputChange}
            onKeyDown={handleSearchInputKeyDown}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="sort-container">
          <label htmlFor="sort">Sort by price:</label>
          <select
            id="sort"
            value={sortingOption}
            onChange={handleSortingOptionChange}
          >
            <option value="none">None</option>
            <option value="low-to-high">Low to high</option>
            <option value="high-to-low">High to low</option>
          </select>
        </div>
      </div>
      <button onClick={() => setShowAddProductForm(!showAddProductForm)}>
        Add Product
      </button>
      {showAddProductForm && <AddProductForm onAddProduct={handleAddProduct} />}
      <section>
        <div className="product-list">
          {sortedProducts.length === 0 ? (
            <p>Product not found!</p>
          ) : (
            sortedProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))
          )}
        </div>
      </section>
    </div>
  );
}

export default ProductList;
