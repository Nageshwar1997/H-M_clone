import React from "react";

// React Icons
import { PiDotsThreeOutlineLight } from "react-icons/pi";
import { FaRegHeart, FaRegUserCircle } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";


// Components
import Logo from "./Logo";

const TopHeader = () => {
  return (
    <div className="w-full flex justify-between items-center px-4">
      {/* Logo */}
      <div className="max-w-[100px] w-full flex justify-center items-center">
        <Logo />
      </div>

      {/* Middle Section - Links */}
      <div className="w-full flex items-center gap-6">
        <div className="cursor-pointer hover:text-red-600 text-gray-800 font-medium transition-colors">
          Customer Service
        </div>
        <div className="cursor-pointer hover:text-red-600 text-gray-800 font-medium transition-colors">
          Newsletter
        </div>
        <div className="cursor-pointer hover:text-red-600 text-gray-800 font-medium transition-colors">
          Find a Store
        </div>
        <PiDotsThreeOutlineLight
          size={30}
          className="cursor-pointer hover:text-red-600 text-gray-800 transition-colors"
        />
      </div>

      {/* Search Bar */}
      <div className="max-w-4xl w-full flex items-center bg-white border border-gray-300 rounded-lg shadow-sm">
        <input
          type="text"
          placeholder="Search Products Here..."
          className="w-full text-sm px-4 py-2 rounded-lg focus:outline-none placeholder-gray-400"
        />
        <span className="text-gray-600 cursor-pointer hover:text-gray-800 p-2">
          <IoIosSearch size={20} />
        </span>
      </div>

      {/* Right Section - Icons and Text */}
      <div className="w-full flex justify-end items-center gap-6">
        <div className="flex items-center gap-2 cursor-pointer hover:text-red-600 text-gray-800 font-medium transition-colors">
          <FaRegUserCircle size={24} />
          <span className="text-sm lg:text-base">Sign In</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:text-red-600 text-gray-800 font-medium transition-colors">
          <FaRegHeart size={24} />
          <span className="text-sm lg:text-base">Favourites</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:text-red-600 text-gray-800 font-medium transition-colors">
          <HiOutlineShoppingBag size={24} />
          <span className="text-sm lg:text-base">Shopping Bag (0)</span>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
