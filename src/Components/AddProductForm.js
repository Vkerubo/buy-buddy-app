import { useState } from "react";
import "./AddProductForm.css";

function AddProductForm(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      title: title,
      description: description,
      price: price,
      image: image,
    };
    props.onAddProduct(newProduct);
    setTitle("");
    setDescription("");
    setPrice("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-product-form">
      <h2>Add New Product</h2>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={(event) => setImage(event.target.value)}
          required
        />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProductForm;
