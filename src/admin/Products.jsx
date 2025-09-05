import React, { useEffect, useState } from "react";
import ProductModal from "./ProductModal";
import { getProducts, deleteProduct } from "../utils/storage";

function Products() {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);

  // Load products when page loads
  useEffect(() => {
    setProducts(getProducts());

    // Listen for storage updates (from ProductModal)
    const handleStorageUpdate = () => setProducts(getProducts());
    window.addEventListener("storageUpdate", handleStorageUpdate);

    return () => {
      window.removeEventListener("storageUpdate", handleStorageUpdate);
    };
  }, []);

  // Delete a product
  const handleDelete = (id) => {
    deleteProduct(id);
    setProducts(getProducts()); // refresh after delete
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Products</h2>
        <button
          onClick={() => {
            setProductToEdit(null); // reset edit state
            setIsModalOpen(true);
          }}
          className="px-4 py-2 bg-black text-white rounded"
        >
          Add Product
        </button>
      </div>

      {/* Products Grid */}
      {products.length === 0 ? (
        <p>No products found. Add some!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow flex flex-col"
            >
              <img
                src={product.image || product.imageUrl}
                alt={product.name}
                className="h-40 w-full object-cover rounded"
              />
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
              <p className="text-gray-600">₦{product.price}</p>
              <p className="text-sm text-gray-500">{product.category}</p>
              <div className="mt-3 flex gap-2">
                <button
                  onClick={() => {
                    setProductToEdit(product);
                    setIsModalOpen(true);
                  }}
                  className="px-3 py-1 bg-blue-500 text-white rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add/Edit Product Modal */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productToEdit={productToEdit}
      />
    </div>
  );
}

export default Products;
