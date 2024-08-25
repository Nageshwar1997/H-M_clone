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
    <div className="max-w-[60rem] w-full mx-auto flex flex-col gap-5">
      <div className="w-full">
        <ul className="flex justify-around items-center p-4 text-sm text-center">
          <li className="hover:text-red-600 hover:underline cursor-pointer hover:font-medium max-w-[33%] w-full">
            Free shipping above ₹1999
          </li>
          <li className="hover:text-red-600 hover:underline cursor-pointer hover:font-medium max-w-[33%] w-full">
            Estimated delivery time: 2-7 days
          </li>
          <li className="hover:text-red-600 hover:underline cursor-pointer hover:font-medium max-w-[33%] w-full">
            Free & flexible 15 days return
          </li>
        </ul>
      </div>
      <HomeCarousel />
      <SeasonalSwitchUpBanner />
      <TheBestOfSeasonStartingBanner />
      <LuxeAthleisureBanner />
      <TheJeansEditBanner />
      <TheSportLuxeEdit />
      <HomeFallBanner />
      <AnamikaKhannaBanner />
    </div>
  );
};

export default Home;
