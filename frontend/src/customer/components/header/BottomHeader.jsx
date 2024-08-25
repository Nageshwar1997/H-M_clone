import React from "react";

const BottomHeader = () => {
  return (
    <div className="w-full flex justify-center gap-6 lg:gap-8 mt-4 text-sm lg:text-base font-semibold text-gray-700">
      <div className="cursor-pointer hover:text-red-600 hover:underline transition-colors">
        Ladies
      </div>
      <div className="cursor-pointer hover:text-red-600 hover:underline transition-colors">
        Men
      </div>
      <div className="cursor-pointer hover:text-red-600 hover:underline transition-colors">
        Baby
      </div>
      <div className="cursor-pointer hover:text-red-600 hover:underline transition-colors">
        Kids
      </div>
      <div className="cursor-pointer hover:text-red-600 hover:underline transition-colors">
        H&M Home
      </div>
      <div className="cursor-pointer hover:text-red-600 hover:underline transition-colors">
        Sports
      </div>
      <div className="cursor-pointer hover:text-red-600 hover:underline transition-colors">
        Sale
      </div>
      <div className="cursor-pointer hover:text-red-600 hover:underline transition-colors">
        Sustainability
      </div>
    </div>
  );
};

export default BottomHeader;
