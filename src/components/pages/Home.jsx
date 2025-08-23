import React, { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa"; 
import ProductCard from "../ProductCard";
import products from "../data/Products";
import { SearchContext } from "../context/SearchContext";

function Home() {
  const categories = ["All", ...new Set(products.map((p) => p.category))];
  const [activeCategory, setActiveCategory] = useState("All");
  const { searchTerm } = useContext(SearchContext);

  // track focus for dropdown arrow
  const [isFocused, setIsFocused] = useState(false);

  // combine search and category filters
  const filteredProducts = products
    .filter((p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((p) =>
      activeCategory === "All" ? true : p.category === activeCategory
    );

  // Hero text rotation
  const heroTexts = [
    "Welcome to (Name of Brand).",
    "Our Quality You Can Trust.",
    "Your Satisfaction Is Guranteed.",
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

      {/* Category Section */}
      <div className="categories sm:px-4 md:px-8 lg:px-16 xl:px-32 p-8">
        <h3 className="text-2xl font-semibold mb-4">Shop by Category</h3>

        {/* Buttons → medium+ screens */}
        <AnimatePresence>
          <motion.div
            key="buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="hidden sm:flex flex-wrap sm:gap-5 md:gap-5 lg:gap-10 xl:gap-10 gap-4 border-b border-black p-2"
          >
            {categories.map((cat, index) => (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                key={index}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-lg font-medium transition ${
                  activeCategory === cat
                    ? "bg-black text-white shadow-lg"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Dropdown → small screens */}
        <AnimatePresence>
          <motion.div
            key="dropdown"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="block sm:hidden mt-4 relative"
          >
            <div className="relative">
              <motion.select
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-0 focus:ring-black transition appearance-none pr-10"
              >
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                ))}
              </motion.select>

              {/* Custom dropdown arrow with smooth spring animation */}
              <motion.div
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                animate={{ rotate: isFocused ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <FaChevronDown />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Product Grid */}
      <div className="products sm:px-4 md:px-8 lg:px-16 xl:px-32 p-8">
        <h3 className="text-2xl font-semibold mb-4">{activeCategory} Products</h3>
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No products found in this category.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
