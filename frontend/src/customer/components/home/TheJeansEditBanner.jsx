import React from "react";

import Banner from "../../../assets/home/theJeansEdit.jpg";
import { MdArrowLeft } from "react-icons/md";

const TheJeansEditBanner = () => {
  return (
    <div
      className="relative w-full h-[450px] sm:h-[550px] md:h-[640px] lg:h-[720px] bg-cover bg-center bg-no-repeat rounded"
      style={{ backgroundImage: `url(${Banner})` }}
      aria-label="Seasonal Switch Up Banner"
    >
      <div className="absolute top-[20%] right-[12%] sm:right-[20%] md:right-[27%] lg:right-[35%] flex items-center gap-2">
        {/* Text Box with Product Details */}
        <div className="flex items-center justify-start relative">
          <MdArrowLeft className="text-3xl md:text-5xl absolute -left-[17px] z-10 sm:-left-7 top-1/2 transform -translate-y-1/2 text-[#222222]" />
          <div className="rounded-md shadow-sm bg-[#222222] text-gray-300 p-3 sm:p-4 w-40 sm:w-48 font-semibold capitalize">
            <p className="line-clamp-2 cursor-pointer text-xs sm:text-sm md:text-base">
              Rs. 1,799.00 Wide Leg Jeans{" "}
              <span className="font-bold">{">"}</span>
            </p>
          </div>
          {/* Adjusted Icon Position */}
        </div>
      </div>

      {/* <div className="absolute top-16 right-[12%] sm:right-[15%] md:right-[18%] lg:right-[22%] flex items-center gap-2">
        <MdArrowLeft className="text-3xl sm:text-4xl md:text-5xl text-[#222222] mr-0" />
        <div className="rounded-md shadow-sm bg-[#222222] text-gray-300 p-3 sm:p-4 w-40 sm:w-48 font-semibold capitalize">
          <p className="line-clamp-2 cursor-pointer text-xs sm:text-sm md:text-base">
            Rs. 1,799.00 Wide Leg Jeans <span className="font-bold">{">"}</span>
          </p>
        </div>
      </div> */}

      {/* Centered Main Content */}
      <div className="absolute bottom-8 sm:bottom-10 left-8 sm:left-10 text-left flex flex-col gap-2 sm:gap-4 items-start">
        <h4 className="text-lg sm:text-xl font-bold text-gray-200">
          NEW ARRIVALS
        </h4>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200">
          The Jeans Edit
        </h1>
        <p className="font-semibold text-gray-200 text-sm sm:text-base">
          Chic blouses for every moment
        </p>
        <div className="flex gap-4">
          <button className="p-2 w-32 sm:w-36 bg-slate-200 text-gray-950 font-semibold hover:bg-slate-300 transition duration-300 shadow-md rounded-sm">
            Shop Girls
          </button>
          <button className="p-2 w-32 sm:w-36 bg-slate-200 text-gray-950 font-semibold hover:bg-slate-300 transition duration-300 shadow-md rounded-sm">
            Shop Boys
          </button>
        </div>
      </div>
    </div>
  );
};

export default TheJeansEditBanner;
