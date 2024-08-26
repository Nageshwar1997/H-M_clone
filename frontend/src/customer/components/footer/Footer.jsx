import React from "react";
import {
  FaArrowRight,
  FaInstagram,
  FaPinterest,
  FaSquareFacebook,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";

import Logo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <div className="w-full h-fit py-10 bg-gray-200 dark:bg-darkBackground mt-5">
      <div className="max-w-[60rem] w-full mx-auto grid gap-4">
        <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          <div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-darkText mb-3">
              SHOP
            </h3>
            <p className="hover:underline cursor-pointer hover:text-red-600 dark:hover:text-red-400 text-gray-700 dark:text-darkText">
              Ladies
            </p>
            <p className="hover:underline cursor-pointer hover:text-red-600 dark:hover:text-red-400 text-gray-700 dark:text-darkText">
              Men
            </p>
            <p className="hover:underline cursor-pointer hover:text-red-600 dark:hover:text-red-400 text-gray-700 dark:text-darkText">
              Baby
            </p>
            <p className="hover:underline cursor-pointer hover:text-red-600 dark:hover:text-red-400 text-gray-700 dark:text-darkText">
              Kids
            </p>
            <p className="hover:underline cursor-pointer hover:text-red-600 dark:hover:text-red-400 text-gray-700 dark:text-darkText">
              H&M Home
            </p>
            <p className="hover:underline cursor-pointer hover:text-red-600 dark:hover:text-red-400 text-gray-700 dark:text-darkText">
              Sport
            </p>
            <p className="hover:underline cursor-pointer hover:text-red-600 dark:hover:text-red-400 text-gray-700 dark:text-darkText">
              Magazine
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-darkText mb-3">
              CORPORATE INFO
            </h3>
            <p className="hover:underline cursor-pointer hover:text-red-600 dark:hover:text-red-400 text-gray-700 dark:text-darkText">
              Career at H&M
            </p>
            <p className="hover:underline cursor-pointer hover:text-red-600 dark:hover:text-red-400 text-gray-700 dark:text-darkText">
              About H&M group
            </p>
            <p className="hover:underline cursor-pointer hover:text-red-600 dark:hover:text-red-400 text-gray-700 dark:text-darkText">
              Sustainability H&M Group
            </p>
            <p className="hover:underline cursor-pointer hover:text-red-600 dark:hover:text-red-400 text-gray-700 dark:text-darkText">
              Press
            </p>
            <p className="hover:underline cursor-pointer hover:text-red-600 dark:hover:text-red-400 text-gray-700 dark:text-darkText">
              Investor relations
            </p>
            <p className="hover:underline cursor-pointer hover:text-red-600 dark:hover:text-red-400 text-gray-700 dark:text-darkText">
              Corporate governance
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-darkText mb-3">
              HELP
            </h3>
            <p className="hover:underline cursor-pointer hover:text-red-600 dark:hover:text-red-400 text-gray-700 dark:text-darkText">
              Customer Service
            </p>
            <p className="hover:underline cursor-pointer hover:text-red-600 dark:hover:text-red-400 text-gray-700 dark:text-darkText">
              My H&M
            </p>
            <p className="hover:underline cursor-pointer hover:text-red-600 dark:hover:text-red-400 text-gray-700 dark:text-darkText">
              Find a store
            </p>
            <p className="hover:underline cursor-pointer hover:text-red-600 dark:hover:text-red-400 text-gray-700 dark:text-darkText">
              Legal & Privacy
            </p>
            <p className="hover:underline cursor-pointer hover:text-red-600 dark:hover:text-red-400 text-gray-700 dark:text-darkText">
              Contact
            </p>
            <p className="hover:underline cursor-pointer hover:text-red-600 dark:hover:text-red-400 text-gray-700 dark:text-darkText">
              Report a scam
            </p>
            <p className="hover:underline cursor-pointer hover:text-red-600 dark:hover:text-red-400 text-gray-700 dark:text-darkText">
              Cookie Notice
            </p>
            <p className="hover:underline cursor-pointer hover:text-red-600 dark:hover:text-red-400 text-gray-700 dark:text-darkText">
              Cookie Settings
            </p>
          </div>

          <div>
            <div className="text-lg font-bold text-gray-800 dark:text-darkText mb-3 flex items-center gap-2 hover:underline cursor-pointer hover:text-red-600 dark:hover:text-red-400">
              Read more <FaArrowRight />
            </div>
            <p className="underline text-gray-700 dark:text-darkText">
              Sign up now and be the first to know about exclusive offers,
              latest fashion news & style tips!
            </p>
          </div>
        </div>
        <div className="w-full mx-auto">
          <div className="w-full flex justify-center items-center gap-4 text-gray-900 text-sm sm:text-lg md:text-xl lg:text-2xl">
            <div className="p-2 rounded-md bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center shadow-sm">
              <FaInstagram className="text-white" />
            </div>

            <div className="p-2 rounded-md bg-gradient-to-r from-blue-500 via-black to-pink-500 flex items-center justify-center shadow-sm">
              <FaTiktok className="text-white" />
            </div>

            <div className="p-2 rounded-md bg-gradient-to-r from-red-500 via-red-600 to-red-700 flex items-center justify-center shadow-sm">
              <FaYoutube className="text-white" />
            </div>
            <div className="p-2 rounded-md bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 flex items-center justify-center shadow-sm">
              <FaSquareFacebook className="text-white" />
            </div>

            <div className="p-2 rounded-md bg-gradient-to-r from-red-500 via-red-600 to-red-700 flex items-center justify-center shadow-sm">
              <FaPinterest className="text-white" />
            </div>
          </div>
        </div>
        <p className="text-center text-gray-700 dark:text-darkText text-xs sm:text-sm">
          The content of this site is copyright-protected and is the property of
          H & M Hennes & Mauritz AB.
        </p>
        <div className="mx-auto w-full">
          <img src={Logo} alt="H&M Logo" className="w-8 sm:w-10 md:w-14 mx-auto" />
        </div>
        <h3 className="text-center text-gray-700 dark:text-darkText text-xs sm:text-sm md:text-lg lg:text-xl font-semibold">INDIA | Rs.</h3>
      </div>
    </div>
  );
};

export default Footer;
