import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    updateQty,
    clearCart,
    cartTotal,
  } = useContext(CartContext);

  // ✅ WhatsApp Checkout Function
  const handleCheckout = () => {
    const phoneNumber = "2348055003497"; 

    const orderSummary = cartItems
      .map(
        (item, index) =>
          `${index + 1}. ${item.name}${
            item.selectedSize ? ` (Size: ${item.selectedSize})` : ""
          } - ${item.qty} × ₦${item.price.toLocaleString()} = ₦${(
            item.price * item.qty
          ).toLocaleString()}`
      )
      .join("%0A");

    const message = `Hello, I'd like to place an order:%0A%0A${orderSummary}%0A%0ATotal: ₦${cartTotal.toLocaleString()}`;
    const url = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(url, "_blank");

    // ✅ Clear cart after checkout
    clearCart();
  };

  return (
    <div className="p-6 max-w-5xl mx-auto bg-gray-100 min-h-150">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-600 mb-4">Your cart is empty.</p>
          <Link
            to="/"
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Cart Items */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-lg shadow"
            >
              {/* Product Info */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h2 className="font-semibold text-lg">{item.name}</h2>

                  {/* ✅ Show selected size if available */}
                  {item.selectedSize && (
                    <p className="text-sm text-gray-500">
                      Size: {item.selectedSize}
                    </p>
                  )}

                  <p className="text-gray-600">₦{item.price.toLocaleString()}</p>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-3 mt-4 sm:mt-0">
                <button
                  onClick={() => updateQty(item.id, item.qty - 1)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span className="px-2 font-medium">{item.qty}</span>
                <button
                  onClick={() => updateQty(item.id, item.qty + 1)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>

              {/* Total & Remove */}
              <div className="flex flex-col items-center sm:items-end mt-4 sm:mt-0">
                <p className="font-semibold">
                  ₦{(item.price * item.qty).toLocaleString()}
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:underline mt-2"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Cart Summary */}
          <div className="flex flex-col sm:flex-row justify-between items-center border-t pt-6 mt-6">
            <h2 className="text-xl font-semibold">
              Total: ₦{cartTotal.toLocaleString()}
            </h2>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <button
                onClick={clearCart}
                disabled={cartItems.length === 0}
                className={`px-6 py-3 rounded-lg text-white transition ${
                  cartItems.length === 0
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-red-500 hover:bg-red-600"
                }`}
              >
                Clear All
              </button>
              <button
                onClick={handleCheckout}
                disabled={cartItems.length === 0}
                className={`px-6 py-3 rounded-lg text-white transition ${
                  cartItems.length === 0
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700"
                }`}
              >
                Checkout with WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
