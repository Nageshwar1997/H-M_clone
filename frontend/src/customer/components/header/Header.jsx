import React from "react";
import BottomHeader from "./BottomHeader";
import TopHeader from "./TopHeader";

const Header = () => {
  return (
    <div className="w-full flex flex-col py-4 px-4 shadow-sm border border-gray-200 dark:border-borderDark rounded-md bg-white dark:bg-darkBackground transition-all duration-300">
      {/* Top Section */}
      <TopHeader />

      {/* Bottom Section - Navigation Links */}
      <BottomHeader />
    </div>
  );
};

export default Header;
