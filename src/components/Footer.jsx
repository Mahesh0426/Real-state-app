import React from "react";
import { assets } from "../../public/assets/assets";
import { toast } from "react-toastify";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className="pt-10 pb-5 px-4 md:px-20 lg:px-32 w-full bg-gray-900 overflow-hidden"
      id="Footer"
    >
      <div className="flex flex-col md:flex-row justify-between items-start container mx-auto ">
        {/* 1st Col */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo} alt="logo" />
          <p className="text-gray-400 mt-4">
            Your dream home awaits! At RealmX, we offer personalized real estate
            services to help you buy, sell, or invest with confidence. Explore
            our listings today!
          </p>
        </div>

        {/* 2nd col */}
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <a href="#Header" className="hover:text-white">
              Home
            </a>
            <a href="#About" className="hover:text-white">
              About Us
            </a>
            <a href="#Contact" className="hover:text-white">
              Contact Us
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">
            {" "}
            Suscribe to our newswlater
          </h3>
          <p className="text-gray-400 mb-4 max-w-80">
            "Don't miss out! Get weekly news articles and helpful resources sent
            directly to you!"
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your Email"
              className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto"
            />
            <button
              onClick={() => toast("Thank You For Suscribing!!")}
              className=" py-2 px-4 rounded bg-blue-500 text-white"
            >
              Suscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-4 text-gray-500 border-t border-gray-700 mt-10 ">
        &copy; 2022 RealmX. All rights reserved.
      </div>

      {/* Go to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-yellow-500 p-3 rounded-full text-white shadow-lg hover:bg-yellow-400 transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7-7-7 7M12 15V3"
          />
        </svg>
      </button>
    </div>
  );
};

export default Footer;
