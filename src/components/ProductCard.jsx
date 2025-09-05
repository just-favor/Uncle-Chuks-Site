import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const fallbackImage =
    "https://via.placeholder.com/300x200.png?text=No+Image"; // Default placeholder

  return (
    <div className="bg-gray-50 rounded-lg p-4 hover:shadow-lg shadow-gray-300 transition flex flex-col justify-between mt-8 gap-4 hover:bg-white">
      {/* Product Info */}
      <Link to={`/product/${product.id}`} className="flex flex-col flex-1">
        <img
          src={product.image || fallbackImage}
          alt={product.name}
          className="m-auto w-full h-40 sm:h-48 md:h-52 lg:h-56 object-cover rounded-lg mb-3"
        />

        {/* Product Name */}
        <h3 className="font-semibold text-lg sm:text-base md:text-lg lg:text-lg line-clamp-1">
          {product.name}
        </h3>

        {/* Product Price */}
        <p className="text-gray-700 text-sm sm:text-base md:text-base lg:text-base">
          ₦{Number(product.price).toLocaleString()}
        </p>
      </Link>

      {/* View / Out of Stock Button */}
      {product.stock === 0 ? (
        <button
          disabled
          className="mt-2 text-center bg-gray-400 text-white px-4 py-2 rounded-lg cursor-not-allowed"
        >
          Out of Stock
        </button>
      ) : (
        <Link
          to={`/product/${product.id}`}
          className="mt-2 text-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          View
        </Link>
      )}
    </div>
  );
}

export default ProductCard;
