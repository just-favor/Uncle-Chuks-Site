import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast";
import { getProducts } from "../../utils/storage";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    const allProducts = getProducts();
    const found = allProducts.find((p) => String(p.id) === String(id));
    setProduct(found || null);
  }, [id]);

  if (!product) {
    return (
      <h2 className="text-center text-xl sm:text-2xl mt-10">
        Product Not Found
      </h2>
    );
  }

  const handleAddToCart = () => {
    addToCart({ ...product, selectedSize: selectedSize || null });
    toast.success(`${product.name} added to cart ✅`);
  };

  return (
    <div className="p-5 sm:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12">
      <img
        src={product.image}
        alt={product.name}
        className="w-full max-w-sm mx-auto lg:max-w-md rounded-lg shadow-lg"
      />

      <div className="flex-1 text-center lg:text-left">
        <h2 className="text-2xl sm:text-4xl font-bold mb-4">{product.name}</h2>
        <p className="text-base sm:text-lg text-gray-600 mb-6">
          {product.description}
        </p>
        <p className="text-xl sm:text-2xl font-semibold mb-6">
          ₦{product.price}
        </p>

        {product.sizes && product.sizes.length > 0 && (
          <div className="mb-6">
            <h3 className="text-base sm:text-lg font-medium mb-2">Select Size:</h3>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {product.sizes.map((size, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-lg text-sm sm:text-base ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button
            onClick={handleAddToCart}
            className="px-6 py-3 bg-black text-white rounded-lg transition cursor-pointer w-full sm:w-auto"
          >
            Add to Cart
          </button>

          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-gray-300 text-black rounded-lg hover:bg-gray-400 transition w-full sm:w-auto"
          >
            Back to Products
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
