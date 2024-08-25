import React from "react";
import { MdArrowRight } from "react-icons/md";
import Banner from "../../../assets/home/luxeAthleisure.jpg";

const LuxeAthleisureBanner = () => {
  return (
    <div
      className="relative w-[960px] h-[640px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Banner})` }}
      aria-label="Seasonal Switch Up Banner"
    >
      {/* Text Box with Product Details */}
      <div className="absolute top-[27%] right-[26%] flex items-center">
        <div className="rounded-md shadow-sm bg-[#222222] shadow-gray-800 font-semibold capitalize text-gray-300 p-4 w-48">
          <p className="line-clamp-2 cursor-pointer">
            Rs. 3,999.00 Regular Fit Hybrid Jacket{" "}
            <span className="font-bold">{">"}</span>
          </p>
        </div>
        <MdArrowRight className="text-4xl text-[#222222] -ml-[15px]" />
      </div>

      {/* Centered Main Content */}
      <div className="absolute bottom-10 left-10 grid gap-3 text-gray-200 text-left">
        <h4 className="text-xl font-bold">NEW ARRIVALS</h4>
        <h1 className="text-4xl font-bold">Luxe Athleisure</h1>
        <p className="font-semibold">Chic blouses for every moment</p>
        <button className="p-2 w-36 bg-slate-200 text-gray-950 font-semibold hover:bg-slate-300 transition duration-300 shadow-md shadow-slate-800 rounded-sm">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default LuxeAthleisureBanner;
