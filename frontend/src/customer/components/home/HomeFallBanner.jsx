import React from "react";
import Banner from "../../../assets/home/homeFall.jfif";

const HomeFallBanner = () => {
  return (
    <div
      className="relative w-[960px] h-[132px] flex flex-col gap-4 justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Banner})` }}
      aria-label="The Best Of Season Starting Banner"
    >
      <h3 className="text-xl font-semibold text-white">Home: Fall 2024</h3>
      <button className="px-3 py-1.5 bg-gray-100 rounded hover:bg-gray-300 font-semibold">
        Shop Now
      </button>
    </div>
  );
};

export default HomeFallBanner;
