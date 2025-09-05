import React, { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import ProductCard from "../ProductCard";
import { SearchContext } from "../context/SearchContext";
import products from "../../components/data/Products";

function Home() {
  const { searchTerm } = useContext(SearchContext);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isFocused, setIsFocused] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16;

  // Hero texts rotation
  const heroTexts = [
    "Welcome to (Name of Brand).",
    "Our Quality You Can Trust.",
    "Your Satisfaction Is Guaranteed.",
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) =>
        prev === heroTexts.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Reset page when search or category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, activeCategory]);

  // Categories
  const categories = ["All", ...new Set(products.map((p) => p.category.toUpperCase()))];

  // Filter products by search + category
  const filteredProducts = products
    .filter((p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((p) =>
      activeCategory === "All" ? true : p.category.toUpperCase() === activeCategory
    );

  // Pagination calculations
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className="home bg-white min-h-screen">
      {/* Hero Section */}
      <div className="hero max-h-fit bg-gray-600 p-15 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.h2
            key={currentTextIndex}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:text-8xl sm:text-4xl font-bold text-white text-center"
          >
            {heroTexts[currentTextIndex]}
          </motion.h2>
        </AnimatePresence>
      </div>

      {/* Categories */}
      <div className="categories sm:px-4 md:px-8 lg:px-16 xl:px-32 p-8">
        <h3 className="text-2xl font-semibold mb-4">Shop by Category</h3>
        <div className="hidden sm:flex flex-wrap gap-4 border-b border-black p-2">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-lg font-medium transition ${
                activeCategory === cat
                  ? "bg-black text-white shadow-lg"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dropdown for small screens */}
        <div className="block sm:hidden mt-4 relative">
          <select
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 text-black"
          >
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="products sm:px-4 md:px-8 lg:px-16 xl:px-32 p-8">
        <h3 className="text-2xl font-semibold mb-4">
          {activeCategory} Products
        </h3>
        {currentProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No products found in this category.</p>
        )}

        {/* Pagination Buttons */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalPages }, (_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx + 1)}
                className={`px-3 py-1 rounded ${
                  currentPage === idx + 1
                    ? "bg-black text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
