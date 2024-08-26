import React from "react";
import SeasonalSwitchUpBanner from "../../customer/components/home/SeasonalSwitchUpBanner";
import TheBestOfSeasonStartingBanner from "../../customer/components/home/TheBestOfSeasonStartingBanner";
import LuxeAthleisureBanner from "../../customer/components/home/LuxeAthleisureBanner";
import TheJeansEditBanner from "../../customer/components/home/TheJeansEditBanner";
import TheSportLuxeEdit from "../../customer/components/home/TheSportLuxeEdit";
import HomeFallBanner from "../../customer/components/home/HomeFallBanner";
import AnamikaKhannaBanner from "../../customer/components/home/AnamikaKhannaBanner";
import HomeCarousel from "../../customer/components/home/HomeCarousel";

const Home = () => {
  return (
    <div className="max-w-[65rem] w-full mx-auto flex flex-col gap-5 px-4 sm:px-6 lg:px-8">
      {/* Info Bar */}
      <div className="w-full bg-white dark:bg-darkBackground rounded-lg shadow-sm">
        <ul className="flex flex-col sm:flex-row justify-between items-center p-4 text-xs sm:text-sm lg:text-base text-center text-gray-700 dark:text-darkText gap-2 sm:gap-0">
          {[
            "Free shipping above ₹1999",
            "Estimated delivery time: 2-7 days",
            "Free & flexible 15 days return",
          ].map((text, index) => (
            <li
              key={index}
              className="hover:text-red-600 dark:hover:text-red-500 hover:underline cursor-pointer hover:font-medium transition-all duration-300 ease-in-out max-w-[100%] sm:max-w-[33%] w-full"
            >
              {text}
            </li>
          ))}
        </ul>
      </div>

      {/* Carousel and Banners */}
      <SeasonalSwitchUpBanner />
      <TheBestOfSeasonStartingBanner />
      <HomeCarousel />
      <LuxeAthleisureBanner />
      <TheJeansEditBanner />
      <TheSportLuxeEdit />
      <HomeFallBanner />
      <AnamikaKhannaBanner />
    </div>
  );
};

export default Home;
