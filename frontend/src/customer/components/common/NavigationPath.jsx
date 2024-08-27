import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavigationPath = () => {
  const { pathname } = useLocation();
  const myPathName = ["HM.com", ...pathname.split("/").filter(Boolean)];

  return (
    <div className="flex flex-wrap gap-1 justify-center items-center p-2 text-sm sm:text-base">
      {myPathName.map((text, index) => (
        <p key={index} className="font-medium">
          {index === 0 ? (
            <Link to="/" className="text-blue-600 dark:text-blue-400">
              {text}
            </Link>
          ) : (
            <span className="flex items-center">
              <span className="mx-1 dark:text-darkText">/</span>
              <Link
                to={`/${myPathName.slice(1, index + 1).join("/")}`}
                className="text-red-600 dark:text-red-400 capitalize"
              >
                {text}
              </Link>
            </span>
          )}
        </p>
      ))}
    </div>
  );
};

export default NavigationPath;
