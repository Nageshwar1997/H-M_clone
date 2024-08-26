import React from "react";
import Banner from "../../../assets/home/launchingLastBanner.jpg";
import AnamikaKhannaName from "../../../assets/home/anamikaKhannaName.png";
const AnamikaKhannaBanner = () => {
  return (
    <div
      className="w-full h-[450px] sm:h-[550px] md:h-[640px] lg:h-[720px] flex justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Banner})` }}
      aria-label="Seasonal Switch Up Banner"
    >
      <div className="flex flex-col gap-3 sm:gap-4 items-center justify-center text-center">
        <img
          src={AnamikaKhannaName}
          alt="Anamika Khanna"
          className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px]"
        />
        <p className="font-semibold text-gray-200 text-sm sm:text-base md:text-lg">
          Launching 5 September
        </p>
        <button className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-300 font-semibold text-sm sm:text-base">
          See Collection
        </button>
      </div>
    </div>
  );
};

export default AnamikaKhannaBanner;
