"use client";

import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const navItems = [
  { id: 1, text: "Home" },
  { id: 2, text: "Create Blog" },
  { id: 3, text: "My Blogs" },
  { id: 4, text: "Logout" },
];

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 px-4 shadow-md">
      <h1 className="w-full text-3xl font-bold">BLOG {":)"}</h1>

      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 rounded-xl m-2 cursor-pointer duration-300 whitespace-nowrap hover:bg-gray-100"
          >
            {item.text}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] bg-white border-r shadow-md h-full ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl font-bold m-4"></h1>

        <div className="space-y-2">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="p-4 hover:bg-gray-100 duration-300 cursor-pointer"
            >
              {item.text}
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
