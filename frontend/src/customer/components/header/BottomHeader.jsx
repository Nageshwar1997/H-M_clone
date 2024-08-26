import React from "react";

const BottomHeader = () => {
  return (
    <div className="w-full flex justify-center gap-3 lg:gap-6 xl:gap-8 mt-4 text-sm lg:text-base font-semibold text-gray-700 dark:text-darkText overflow-x-auto">
      {[
        "Ladies",
        "Men",
        "Baby",
        "Kids",
        "H&M Home",
        "Sports",
        "Sale",
        "Sustainability",
      ].map((item, index) => (
        <div
          key={index}
          className="cursor-pointer whitespace-nowrap hover:text-red-600 dark:hover:text-red-500 hover:underline underline-offset-4 transition-colors duration-300 ease-in-out"
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default BottomHeader;
