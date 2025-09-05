import React from "react";
import { useNavigate } from "react-router-dom";

function Topbar({ setIsSidebarOpen }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdmin"); // clear admin session
    navigate("/admin-login");
  };

  return (
    <div className="flex items-center justify-between bg-white p-4 shadow-md">
      {/* Sidebar toggle for mobile */}
      <button
        className="lg:hidden p-2 bg-gray-200 rounded"
        onClick={() => setIsSidebarOpen((prev) => !prev)}
      >
        ☰
      </button>

      <h1 className="text-xl font-bold">Admin Dashboard</h1>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}

export default Topbar;
