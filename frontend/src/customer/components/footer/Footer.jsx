import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full h-fit py-10 bg-gray-200 mt-5">
      <div className="max-w-[60rem] w-full mx-auto flex justify-between px-2">
        <div className="w-1/4">
          <h3 className="text-lg font-bold text-gray-800 mb-2">SHOP</h3>
          <p className="hover:underline cursor-pointer hover:text-red-600">
            Ladies
          </p>
          <p className="hover:underline cursor-pointer hover:text-red-600">
            Men
          </p>
          <p className="hover:underline cursor-pointer hover:text-red-600">
            Baby
          </p>
          <p className="hover:underline cursor-pointer hover:text-red-600">
            Kids
          </p>
          <p className="hover:underline cursor-pointer hover:text-red-600">
            H&M Home
          </p>
          <p className="hover:underline cursor-pointer hover:text-red-600">
            Sport
          </p>
          <p className="hover:underline cursor-pointer hover:text-red-600">
            Magazine
          </p>
        </div>
        <div className="w-1/4">
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            CORPORATE INFO
          </h3>
          <p className="hover:underline cursor-pointer hover:text-red-600">
            Career at H&M
          </p>
          <p className="hover:underline cursor-pointer hover:text-red-600">
            About H&M group
          </p>
          <p className="hover:underline cursor-pointer hover:text-red-600">
            Sustainability H&M Group
          </p>
          <p className="hover:underline cursor-pointer hover:text-red-600">
            Press
          </p>
          <p className="hover:underline cursor-pointer hover:text-red-600">
            Investor relations
          </p>
          <p className="hover:underline cursor-pointer hover:text-red-600">
            Corporate governance
          </p>
        </div>
        <div className="w-1/4">
          <h3 className="text-lg font-bold text-gray-800 mb-2">HELP</h3>
          <p className="hover:underline cursor-pointer hover:text-red-600">
            Customer Service
          </p>
          <p className="hover:underline cursor-pointer hover:text-red-600">
            My H&M
          </p>
          <p className="hover:underline cursor-pointer hover:text-red-600">
            Find a store
          </p>
          <p className="hover:underline cursor-pointer hover:text-red-600">
            Legal & Privacy
          </p>
          <p className="hover:underline cursor-pointer hover:text-red-600">
            Contact
          </p>
          <p className="hover:underline cursor-pointer hover:text-red-600">
            Report a scam
          </p>
          <p className="hover:underline cursor-pointer hover:text-red-600">
            Cookie Notice
          </p>
          <p className="hover:underline cursor-pointer hover:text-red-600">
            Cookie Settings
          </p>
        </div>
        <div className="w-1/4">
          <div className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2 hover:underline cursor-pointer hover:text-red-600">
            Read more <FaArrowRight />
          </div>
          <p className="underline">
            Sign up now and be the first to know about exclusive offers, latest
            fashion news & style tips!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
