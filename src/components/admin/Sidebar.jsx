import React from "react";
import { NavLink } from "react-router-dom";
import { FaChartPie, FaBox, FaUsers, FaClipboardList, FaHome, FaTimes } from "react-icons/fa";

function Sidebar({ isOpen, setIsOpen }) {
  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black z-40 md:hidden transition-all duration-300 w-40
        ${isOpen ? "bg-opacity-50 visible opacity-100" : "bg-opacity-0 invisible opacity-0"}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-black text-white flex flex-col z-50 
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:relative md:translate-x-0 md:w-64`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-2xl font-bold">Admin</h2>
          <button
            className="md:hidden text-xl"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-2 p-2">
          <NavLink
            to="/admin"
            end
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded-md hover:bg-gray-800 ${
                isActive ? "bg-gray-800" : ""
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            <FaHome /> Dashboard
          </NavLink>

          <NavLink
            to="/admin/products"
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded-md hover:bg-gray-800 ${
                isActive ? "bg-gray-800" : ""
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            <FaBox /> Products
          </NavLink>

          <NavLink
            to="/admin/orders"
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded-md hover:bg-gray-800 ${
                isActive ? "bg-gray-800" : ""
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            <FaClipboardList /> Orders
          </NavLink>

          <NavLink
            to="/admin/users"
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded-md hover:bg-gray-800 ${
                isActive ? "bg-gray-800" : ""
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            <FaUsers /> Users
          </NavLink>

          <NavLink
            to="/admin/analytics"
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded-md hover:bg-gray-800 ${
                isActive ? "bg-gray-800" : ""
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            <FaChartPie /> Analytics
          </NavLink>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
