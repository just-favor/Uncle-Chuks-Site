import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-gray-50 rounded-lg p-3  hover:shadow-lg  shadow-gray-300 transition flex flex-col justify-between mt-10 gap-5 hover:bg-white">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="m-auto w-50 h-40 sm:h-48 md:h-52 lg:h-56 object-cover rounded mb-3"
        />

        {/* Product Name */}
        <h3 className="font-semibold text-lg sm:text-base md:text-lg lg:text-lg">
          {product.name}
        </h3>

        {/* Product Price */}
        <p className="text-gray-700 text-sm sm:text-base md:text-base lg:text-base">
          ₦{product.price.toLocaleString()}
        </p>
      </Link>

      {/* Add to Cart Button */}
      <button
        onClick={() => onAddToCart(product)}
        className="mt-3 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
