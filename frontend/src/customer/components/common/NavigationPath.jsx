import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavigationPath = () => {
  const { pathname } = useLocation();
  const myPathName = ("HM.com" + pathname).split("/");
  return (
    <div className="flex gap-1 justify-center items-center p-2">
      {myPathName.map((text, index) => (
        <p key={index} className="font-medium">
          {index === 0 ? (
            <Link to="/">{text}</Link>
          ) : (
            <Link to={`/${text}`} className="text-red-600 capitalize">
              / {text}
            </Link>
          )}
        </p>
      ))}
    </div>
  );
};

export default NavigationPath;
