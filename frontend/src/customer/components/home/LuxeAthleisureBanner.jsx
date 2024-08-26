import React from "react";
import { MdArrowRight } from "react-icons/md";
import Banner from "../../../assets/home/luxeAthleisure.jpg";

const LuxeAthleisureBanner = () => {
  return (
    <div
      className="relative w-full h-[450px] sm:h-[550px] md:h-[640px] lg:h-[720px] bg-cover bg-center bg-no-repeat rounded"
      style={{ backgroundImage: `url(${Banner})` }}
      aria-label="Seasonal Switch Up Banner"
    >
      {/* Text Box with Product Details */}
      <div className="absolute top-[27%] right-[12%] sm:right-[18%] md:right-[22%] lg:right-[27%] flex items-center gap-2">
        <div className="flex items-center justify-start relative">
          <div className="rounded-md shadow-sm bg-[#222222] text-gray-300 p-3 sm:p-4 w-40 sm:w-48 font-semibold capitalize">
            <p className="line-clamp-2 cursor-pointer text-xs sm:text-sm md:text-base">
              Rs. 3,999.00 Regular Fit Hybrid Jacket{" "}
              <span className="font-bold">{">"}</span>
            </p>
          </div>
          {/* Adjusted Icon Position */}
          <MdArrowRight className="text-3xl md:text-5xl absolute -right-[17px] z-10 sm:-right-7 top-1/2 transform -translate-y-1/2 text-[#222222]" />
        </div>
      </div>

      {/* Centered Main Content */}
      <div className="absolute bottom-8 left-8 sm:bottom-10 sm:left-10 text-left flex flex-col gap-2 sm:gap-4 items-start">
        <h4 className="text-lg sm:text-xl font-bold text-gray-200">
          NEW ARRIVALS
        </h4>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200">
          Luxe Athleisure
        </h1>
        <p className="font-semibold text-gray-200 text-sm sm:text-base">
          Chic blouses for every moment
        </p>
        <button className="p-2 w-32 sm:w-36 bg-slate-200 text-gray-950 font-semibold hover:bg-slate-300 transition duration-300 shadow-md rounded-sm">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default LuxeAthleisureBanner;
