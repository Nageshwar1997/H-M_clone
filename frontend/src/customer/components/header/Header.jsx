import React from "react";
import BottomHeader from "./BottomHeader";
import TopHeader from "./TopHeader";

const Header = () => {
  return (
    <div className="w-full flex flex-col py-4 shadow-sm border border-gray-100 rounded-md">
      {/* Top Section */}
      <TopHeader />
      {/* Bottom Section - Navigation Links */}
      <BottomHeader />
    </div>
  );
};

export default Header;
