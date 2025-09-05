// src/admin/Products.jsx
import React from "react";
import products from "../components/data/Products";

function Products() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Products</h2>

      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow flex flex-col"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-cover rounded"
              />
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
              <p className="text-gray-600">₦{product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
