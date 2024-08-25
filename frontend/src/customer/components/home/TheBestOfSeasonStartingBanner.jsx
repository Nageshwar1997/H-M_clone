import React from "react";

import theBestOfSeasonStartingBanner from "../../../assets/home/theBestOfSeasonStartingBanner.jfif";

const TheBestOfSeasonStartingBanner = () => {
  return (
    <div
      className="relative w-[960px] h-[132px] flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${theBestOfSeasonStartingBanner})` }}
      aria-label="The Best Of Season Starting Banner"
    >
      <h3 className="text-xl font-semibold">The best of the season starting at ₹799</h3>
      <p className="mb-2">Shop curated styles</p>
      <div className="flex gap-4 text-gray-800">
        <button className="px-3 py-1.5 bg-gray-100 rounded hover:bg-gray-300 font-semibold">Ladies</button>
        <button className="px-3 py-1.5 bg-gray-100 rounded hover:bg-gray-300 font-semibold">Men</button>
        <button className="px-3 py-1.5 bg-gray-100 rounded hover:bg-gray-300 font-semibold">Kids & Baby</button>
        <button className="px-3 py-1.5 bg-gray-100 rounded hover:bg-gray-300 font-semibold">Home</button>
        <button className="px-3 py-1.5 bg-gray-100 rounded hover:bg-gray-300 font-semibold">Sports</button>
      </div>
    </div>
  );
};

export default TheBestOfSeasonStartingBanner;
