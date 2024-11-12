import React, { useEffect, useState } from "react";
import { assets } from "../../public/assets/assets";
const NavBar = () => {
  const [showmobileMenu, setshowmobileMenu] = useState(false);

  useEffect(() => {
    if (showmobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showmobileMenu]);
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32">
        <img src={assets.logo} alt="logo" />
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-400">
            Projects
          </a>

          <a
            href="#Testimionials"
            className="cursor-pointer hover:text-gray-400"
          >
            Testimionials
          </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          Sign up
        </button>
        <img
          className="md:hidden w-7 cursor-pointer "
          src={assets.menu_icon}
          alt="menu-Icon"
          onClick={() => setshowmobileMenu(true)}
        />
      </div>

      {/* ------mobile menu-----  */}
      <div
        className={`md:hidden ${
          showmobileMenu ? "fixed w-full" : " h-0 w-0"
        }  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div className=" flex justify-end cursor-pointer ">
          <img
            className=" w-6"
            src={assets.cross_icon}
            alt="cross-icon"
            onClick={() => setshowmobileMenu(false)}
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 mx-5 text-lg font-medium">
          <a
            onClick={() => setshowmobileMenu(false)}
            className="px-4 py-2 rounded-full inline-block"
            href="#Header"
          >
            Home
          </a>
          <a
            onClick={() => setshowmobileMenu(false)}
            className="px-4 py-2 rounded-full inline-block"
            href="#About"
          >
            About
          </a>
          <a
            onClick={() => setshowmobileMenu(false)}
            className="px-4 py-2 rounded-full inline-block"
            href="#Contact"
          >
            Contact Us
          </a>
          <a
            onClick={() => setshowmobileMenu(false)}
            className="px-4 py-2 rounded-full inline-block"
            href="#Testimionials"
          >
            Testimionials
          </a>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
