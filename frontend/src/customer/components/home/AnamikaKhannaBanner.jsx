import React from "react";
import Banner from "../../../assets/home/launchingLastBanner.jpg";
import AnamikaKhannaName from "../../../assets/home/anamikaKhannaName.png";
const AnamikaKhannaBanner = () => {
  return (
    <div
      className="w-[960px] h-[640px] flex justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Banner})` }}
      aria-label="Seasonal Switch Up Banner"
    >
      <div className="flex flex-col gap-4 items-center justify-center">
        <img src={AnamikaKhannaName} alt="Anamika Khanna" />
        <p className="font-semibold text-white">Launching 5 September</p>
        <button className="px-3 py-1.5 bg-gray-100 rounded hover:bg-gray-300 font-semibold">
          See Collection
        </button>
      </div>
    </div>
  );
};

export default AnamikaKhannaBanner;
