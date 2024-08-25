import React from "react";
import SeasonalBanner from "../../../assets/home/seasonalBanner.avif";
import { MdArrowRight } from "react-icons/md";

const SeasonalSwitchUpBanner = () => {
  return (
    <div
      className="relative w-[960px] h-[640px] flex justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${SeasonalBanner})` }}
      aria-label="Seasonal Switch Up Banner"
    >
      {/* Text Box with Product Details */}
      <div className="absolute top-[25%] right-[31%] flex items-center">
        <div className="rounded-md shadow-sm bg-[#222222] shadow-gray-800 font-semibold capitalize text-gray-300 p-4 w-48">
          <p className="line-clamp-2 cursor-pointer">
            Rs. 1,499.00 Drawstring-detail blouse{" "}
            <span className="font-bold">{">"}</span>
          </p>
        </div>
        <MdArrowRight className="text-4xl text-[#222222] -ml-[15px]" />
      </div>

      {/* Centered Main Content */}
      <div className="absolute bottom-10 text-gray-200 text-center flex flex-col gap-4 items-center">
        <h1 className="text-4xl font-bold">Seasonal Switch-Up</h1>
        <p className="font-semibold">Chic blouses for every moment</p>
        <button className="p-2 w-36 bg-slate-200 text-gray-950 font-semibold hover:bg-slate-300 transition duration-300 shadow-md shadow-slate-800 rounded-sm">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default SeasonalSwitchUpBanner;
