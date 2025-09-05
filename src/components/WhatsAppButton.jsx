import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  const phoneNumber = "2348055003497"; // Replace with your WhatsApp number
  const message = "Hello! I have a question about your products."; // Optional prefilled message
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}

export default WhatsAppButton;
