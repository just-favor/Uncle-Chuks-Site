import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (adminId === "favor" && password === "swift321") {
      localStorage.setItem("isAdmin", "true"); // ✅ save as string
      setError(""); // clear error
      navigate("/admin", { replace: true }); // ✅ force redirect
    } else {
      setError("Invalid credentials. Try again.");
    }
  };

  return (
    <div className="h-200 flex items-center justify-center bg-white">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-lg shadow-sm shadow-black w-96 space-y-8"
      >
        <h2 className="text-2xl font-bold text-center">Admin Login</h2>
        <input
          type="text"
          placeholder="Admin ID"
          className="w-full p-1 border-b outline-none"
          value={adminId}
          onChange={(e) => setAdminId(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-1 border-b outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded hover:bg-gray-800"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;
