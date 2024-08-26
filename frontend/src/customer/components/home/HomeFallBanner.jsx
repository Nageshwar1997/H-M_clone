import React from "react";
import Banner from "../../../assets/home/homeFall.jfif";

const HomeFallBanner = () => {
  return (
    <div
      className="relative w-full h-[160px] sm:h-[180px] md:h-[200px] lg:h-[220px] flex flex-col gap-2 sm:gap-3 md:gap-4 justify-center items-center bg-cover bg-center bg-no-repeat rounded"
      style={{ backgroundImage: `url(${Banner})` }}
      aria-label="The Best Of Season Starting Banner"
    >
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white text-center">
        Home: Fall 2024
      </h3>
      <button className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-100 rounded hover:bg-gray-300 font-semibold text-sm sm:text-base">
        Shop Now
      </button>
    </div>
  );
};

export default HomeFallBanner;
