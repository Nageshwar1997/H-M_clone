import React from "react";

import theBestOfSeasonStartingBanner from "../../../assets/home/theBestOfSeasonStartingBanner.jfif";

const TheBestOfSeasonStartingBanner = () => {
  return (
    <div
      className="relative w-full h-[160px] sm:h-[180px] md:h-[200px] lg:h-[220px] flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat rounded"
      style={{ backgroundImage: `url(${theBestOfSeasonStartingBanner})` }}
      aria-label="The Best Of Season Starting Banner"
    >
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center">
        The best of the season starting at ₹799
      </h3>
      <p className="text-sm sm:text-base mb-2 text-center">
        Shop curated styles
      </p>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 text-gray-800">
        <button className="px-3 py-1 sm:px-4 sm:py-1.5 bg-gray-100 rounded hover:bg-gray-300 font-semibold text-xs sm:text-sm md:text-base">
          Ladies
        </button>
        <button className="px-3 py-1 sm:px-4 sm:py-1.5 bg-gray-100 rounded hover:bg-gray-300 font-semibold text-xs sm:text-sm md:text-base">
          Men
        </button>
        <button className="px-3 py-1 sm:px-4 sm:py-1.5 bg-gray-100 rounded hover:bg-gray-300 font-semibold text-xs sm:text-sm md:text-base">
          Kids & Baby
        </button>
        <button className="px-3 py-1 sm:px-4 sm:py-1.5 bg-gray-100 rounded hover:bg-gray-300 font-semibold text-xs sm:text-sm md:text-base">
          Home
        </button>
        <button className="px-3 py-1 sm:px-4 sm:py-1.5 bg-gray-100 rounded hover:bg-gray-300 font-semibold text-xs sm:text-sm md:text-base">
          Sports
        </button>
      </div>
    </div>
  );
};

export default TheBestOfSeasonStartingBanner;
