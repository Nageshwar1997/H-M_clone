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
    <div className="w-full flex flex-col md:flex-row justify-between items-center px-4 py-3 bg-white dark:bg-darkBackground border-b border-gray-200 dark:border-borderDark shadow-sm transition-all duration-300">
      {/* Logo */}
      <div className="max-w-[100px] w-full flex justify-center items-center mb-4 md:mb-0">
        <Logo />
      </div>

      {/* Middle Section - Links */}
      <div className="w-full flex justify-center md:justify-start items-center gap-4 mb-4 md:mb-0">
        <div className="cursor-pointer text-gray-800 hover:text-red-600 dark:hover:text-red-600 dark:text-darkText font-medium transition-colors">
          Customer Service
        </div>
        <div className="cursor-pointer text-gray-800 hover:text-red-600 dark:hover:text-red-600 dark:text-darkText font-medium transition-colors">
          Newsletter
        </div>
        <div className="cursor-pointer text-gray-800 hover:text-red-600 dark:hover:text-red-600 dark:text-darkText font-medium transition-colors">
          Find a Store
        </div>
        <PiDotsThreeOutlineLight
          size={30}
          className="cursor-pointer hover:text-red-600 dark:hover:text-red-600 text-gray-800 dark:text-darkText transition-colors"
        />
      </div>

      {/* Search Bar */}
      <div className="w-full max-w-4xl flex items-center bg-white  dark:bg-borderDark dark:text-darkText border border-gray-300 dark:border-borderDark rounded-lg shadow-sm transition-all duration-300 mb-4 md:mb-0">
        <input
          type="text"
          placeholder="Search Products Here..."
          className="w-full text-sm px-4 py-2 rounded-lg bg-transparent focus:outline-none placeholder-gray-400 dark:placeholder-darkText"
        />
        <span className="text-gray-600 dark:text-darkText cursor-pointer hover:text-gray-800 dark:hover:text-gray-200 p-2">
          <IoIosSearch size={20} />
        </span>
      </div>

      {/* Right Section - Icons and Text */}
      <div className="w-full flex justify-center md:justify-end items-center gap-6">
        <div className="flex items-center gap-2 cursor-pointer hover:text-red-600 dark:hover:text-red-600 text-gray-800 dark:text-darkText font-medium transition-colors">
          <FaRegUserCircle size={24} />
          <span className="text-sm lg:text-base">Sign In</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:text-red-600 dark:hover:text-red-600 text-gray-800 dark:text-darkText font-medium transition-colors">
          <FaRegHeart size={24} />
          <span className="text-sm lg:text-base">Favourites</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:text-red-600 dark:hover:text-red-600 text-gray-800 dark:text-darkText font-medium transition-colors">
          <HiOutlineShoppingBag size={24} />
          <span className="text-sm lg:text-base">Shopping Bag (0)</span>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
