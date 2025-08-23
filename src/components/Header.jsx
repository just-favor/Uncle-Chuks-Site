import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { SearchContext } from "../components/context/SearchContext";

function Header() {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const navigate = useNavigate();

  // State for showing mobile search input
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <header className="bg-white text-black px-4 sm:px-8 lg:px-12 py-4 flex items-center justify-between w-full shadow-md relative">
      {/* Logo */}
      <h1 className="text-2xl sm:text-3xl font-bold">
        <Link to="/">Logo</Link>
      </h1>

      {/* Desktop Search Bar */}
      <div className="hidden md:flex relative flex-1 max-w-md mx-6">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 pl-3 pr-10 rounded-full text-base w-full bg-gray-200 focus:ring-2 focus:ring-black outline-none"
        />
        <button className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
          <FaSearch />
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 sm:gap-6 relative">
        {/* Mobile Search Icon */}
        <button
          className="md:hidden"
          onClick={() => setShowMobileSearch((prev) => !prev)}
        >
          <FaSearch className="text-xl" />
        </button>

        {/* Currency */}
        <div className="hidden sm:flex items-center gap-1">
          <img
            src="https://i.pinimg.com/736x/36/cb/9e/36cb9e9d1329cb9c283c938a31494d51.jpg"
            alt="Nigerian flag"
            className="w-6"
          />
          <span className="text-sm sm:text-base">NGN</span>
        </div>

        {/* Login */}
        <button className="hidden sm:block text-sm sm:text-base">Login</button>

        {/* Cart */}
        <div className="relative">
          <FaShoppingCart
            className="cursor-pointer text-xl sm:text-2xl"
            onClick={() => navigate("/cart")}
          />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
            0
          </span>
        </div>
      </div>

      {/* Mobile Search Input */}
      {showMobileSearch && (
        <div className="absolute left-0 top-full mt-2 w-full px-4 md:hidden z-50">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-2 pl-3 pr-10 rounded-full text-base w-full bg-gray-200 focus:ring-2 focus:ring-black outline-none"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
              <FaSearch />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
