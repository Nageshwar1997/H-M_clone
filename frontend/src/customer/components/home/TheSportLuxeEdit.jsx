import React from "react";
import { MdArrowLeft } from "react-icons/md";
import Banner from "../../../assets/home/theSportsLuxeEdit.jpg";

const TheSportLuxeEdit = () => {
  return (
    <div
      className="relative w-full h-[450px] sm:h-[550px] md:h-[640px] lg:h-[720px] bg-cover bg-center bg-no-repeat rounded"
      style={{ backgroundImage: `url(${Banner})` }}
      aria-label="Seasonal Switch Up Banner"
    >
      {/* Text Box with Product Details */}
      <div className="absolute top-[27%] right-[12%] sm:right-[20%] md:right-[27%] lg:right-[35%] flex items-center gap-2">
        <div className="flex items-center justify-start relative">
          <MdArrowLeft className="text-3xl md:text-5xl absolute -left-[17px] z-10 sm:-left-7 top-1/2 transform -translate-y-1/2 text-[#222222]" />
          <div className="rounded-md shadow-sm bg-[#222222] text-gray-300 p-3 sm:p-4 w-40 sm:w-48 font-semibold capitalize">
            <p className="line-clamp-2 cursor-pointer text-xs sm:text-sm md:text-base">
              Rs. 1,299.00 Ribbed Bodycon Dress{" "}
              <span className="font-bold">{">"}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Centered Main Content */}
      <div className="absolute bottom-8 sm:bottom-12 left-24 sm:left-80 md:left-96 text-left flex flex-col gap-2 sm:gap-4 items-start">
        <h4 className="text-lg sm:text-xl font-bold text-gray-800">
          NEW ARRIVALS
        </h4>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          The Sport Luxe Edit
        </h1>
        <button className="p-2 w-28 sm:w-32 md:w-36 bg-slate-200 text-gray-950 font-semibold hover:bg-slate-300 transition duration-300 shadow-md rounded-sm">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default TheSportLuxeEdit;
