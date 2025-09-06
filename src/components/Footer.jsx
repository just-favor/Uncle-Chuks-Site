import React from 'react'
import { FaPhone, FaLocationDot, FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-black text-white w-full px-6 py-10 lg:px-36">

      <div className="flex flex-col-reverse lg:flex-row justify-between gap-10">
        {/* Contact Section */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-bold">CONTACT US</h4>
          <p className="flex gap-2 items-center text-sm sm:text-base"><FaPhone /> <span>08055003497</span> </p>
          <p className="flex gap-2 items-center text-sm sm:text-base">
            <FaLocationDot /><span> Address | No.12 .................., Port-Harcourt, Nigeria </span> </p>
          

          <div className="socials flex gap-5 items-center">
            <a href="">
              <FaInstagram className="size-6 hover:text-pink-500 transition" />
            </a>
            <a href="">
              <FaFacebookF className="size-6 hover:text-blue-500 transition" />
            </a>
            <a href="">
              <FaXTwitter className="size-6 hover:text-gray-400 transition" />
            </a>
          </div>

        </div>
{/* <hr className='my-10 lg:hidden'/> */}

        {/* Newsletter Section */} 

        {/* <div className="flex flex-col gap-3 w-full lg:w-1/3">
          <h3 className="text-lg font-semibold">
            SIGN UP FOR DISCOUNTS & UPDATES
          </h3>
          <input
            type="text"
            placeholder="Enter Phone Number Or Email Address"
            className="p-3 rounded-lg text-white w-full border border-gray-600 bg-transparent focus:outline-none focus:border-blue-500 transition"
          />
          <button className="bg-white text-black font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition">
            Subscribe
          </button>
        </div> */}
      </div>

      <hr className="my-8 border-gray-700" />

      <h5 className="text-center text-sm sm:text-base px-4">
        "A man's future is built only by his own efforts"
      </h5>
    </footer>
  );
}

export default Footer;
