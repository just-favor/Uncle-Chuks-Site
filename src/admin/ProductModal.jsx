import React, { useState, useEffect } from "react";
import { addProduct, updateProduct } from "../utils/storage";

function ProductModal({ isOpen, onClose, productToEdit }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // Pre-fill form fields when editing
  useEffect(() => {
    if (productToEdit) {
      setName(productToEdit.name || "");
      setDescription(productToEdit.description || "");
      setPrice(productToEdit.price || "");
      setStock(productToEdit.stock || "");
      setCategory(productToEdit.category || "");
      setImageUrl(productToEdit.image || productToEdit.imageUrl || "");
    } else {
      // reset when adding new
      setName("");
      setDescription("");
      setPrice("");
      setStock("");
      setCategory("");
      setImageUrl("");
    }
  }, [productToEdit]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: productToEdit?.id ?? Date.now(), // unique ID
      name,
      description,
      price: Number(price),
      stock: Number(stock),
      category,
      image: imageUrl,
      imageUrl,
    };

    if (productToEdit) {
      updateProduct(productToEdit.id, newProduct);
    } else {
      addProduct(newProduct);
    }

    // let Products.jsx know products changed
    window.dispatchEvent(new Event("storageUpdate"));

    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
        <h2 className="text-xl font-bold mb-4">
          {productToEdit ? "Edit Product" : "Add New Product"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Product Name"
            required
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Description"
            required
          />
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Price"
            required
          />
          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Stock"
            required
          />
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Category"
            required
          />
          <input
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Image URL"
            required
          />

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded"
            >
              {productToEdit ? "Update" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductModal;
