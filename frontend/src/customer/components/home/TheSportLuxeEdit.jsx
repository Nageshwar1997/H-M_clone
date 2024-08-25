import React from "react";
import { MdArrowLeft } from "react-icons/md";
import Banner from "../../../assets/home/theSportsLuxeEdit.jpg";

const TheSportLuxeEdit = () => {
  return (
    <div
      className="relative w-[960px] h-[640px] flex justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Banner})` }}
      aria-label="Seasonal Switch Up Banner"
    >
      {/* Text Box with Product Details */}
      <div className="absolute top-[50%] left-[43%] flex items-center">
        <MdArrowLeft className="text-4xl text-[#222222] -mr-[15px]" />
        <div className="rounded-md shadow-sm bg-[#222222] shadow-gray-800 font-semibold capitalize text-gray-300 p-4 w-48">
          <p className="line-clamp-2 cursor-pointer">
            Rs. 1,299.00 Ribbed Bodycan Dress{" "}
            <span className="font-bold">{">"}</span>
          </p>
        </div>
      </div>

      {/* Centered Main Content */}
      <div className="absolute bottom-14 left-[40%] text-gray-200 text-center flex flex-col gap-4 items-center">
        <h1 className="text-4xl font-bold text-gray-800">
          The Sport Luxe Edit
        </h1>
        <button className="p-2 bg-slate-200 text-gray-950 font-semibold hover:bg-slate-300 transition duration-300 shadow-md shadow-slate-800 rounded-sm">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default TheSportLuxeEdit;
