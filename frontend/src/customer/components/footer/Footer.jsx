import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full h-fit py-10 bg-white dark:bg-darkBackground mt-5">
      <div className="max-w-[60rem] w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
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
            Sign up now and be the first to know about exclusive offers, latest
            fashion news & style tips!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
