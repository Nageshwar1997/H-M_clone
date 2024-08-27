import React, {  useState } from "react";
import NavigationPath from "../../customer/components/common/NavigationPath";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedLoginOption, setSelectedLoginOption] = useState("email");
  // const [loginDetails, setLoginDetails] = useState({
  //   email: "",
  //   phone: "",
  //   password: "",
  // });

  return (
    <div className="max-w-[45rem] w-full mx-auto flex flex-col gap-1 px-4 sm:px-6 lg:px-8">
      <NavigationPath />
      <h3 className="text-center text-sm sm:text-lg md:text-xl font-bold mb-4 dark:text-white">
        Sign in
      </h3>
      <p className="text-center text-xs sm:text-sm mb-4 dark:text-gray-300">
        Become a member — don't miss out on deals, offers, discounts, and bonus
        vouchers.
      </p>
      <form className="w-full h-fit py-2 grid gap-4 px-6 sm:px-12 lg:px-24">
        <div className="w-full flex space-x-1 text-xs sm:text-sm dark:text-gray-300">
          <p>Login Using:</p>
          <div className="flex space-x-4">
            <label
              htmlFor="loginOptionEmail"
              className="flex items-center gap-1 cursor-pointer hover:text-red-600"
            >
              <input
                type="radio"
                className="w-4 h-4 cursor-pointer"
                name="loginOptionEmail"
                id="loginOptionEmail"
                value="email"
                checked={selectedLoginOption === "email"}
                onChange={() => setSelectedLoginOption("email")}
              />
              Email
            </label>
            <label
              htmlFor="loginOptionPhone"
              className="flex items-center gap-1 cursor-pointer hover:text-red-600"
            >
              <input
                type="radio"
                className="w-4 h-4 cursor-pointer"
                name="loginOptionPhone"
                id="loginOptionPhone"
                value="phone"
                checked={selectedLoginOption === "phone"}
                onChange={() => setSelectedLoginOption("phone")}
              />
              Phone
            </label>
          </div>
        </div>
        <div className="w-full grid gap-1">
          <label
            htmlFor={selectedLoginOption === "email" ? "email" : "phone"}
            className="w-fit text-xs sm:text-sm dark:text-gray-300 hover:text-red-600 dark:hover:text-red-600 cursor-pointer"
          >
            {selectedLoginOption === "email" ? "Email:" : "Phone:"}
          </label>
          <div className="flex items-center w-full border border-gray-400 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 rounded">
            {selectedLoginOption === "phone" && (
              <div className="flex items-center px-2 text-gray-700 dark:text-gray-300">
                +91
                <div className="border-r mx-2 border-gray-400 dark:border-gray-600"></div>
              </div>
            )}
            <input
              type="text"
              id={selectedLoginOption === "email" ? "email" : "phone"}
              name={selectedLoginOption === "email" ? "email" : "phone"}
              placeholder={
                selectedLoginOption === "email"
                  ? "Enter Your Email"
                  : "Enter Your Phone Number"
              }
              className="w-full p-3 bg-transparent focus:outline-none text-gray-700 dark:text-gray-300"
            />
          </div>
        </div>
        <div className="w-full grid gap-1">
          <label
            htmlFor="password"
            className="w-fit text-xs sm:text-sm dark:text-gray-300 hover:text-red-600 dark:hover:text-red-600 cursor-pointer"
          >
            Password:
          </label>
          <div className="flex items-center w-full border border-gray-400 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 rounded">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter Your Password"
              className="w-full p-3 bg-transparent focus:outline-none text-gray-700 dark:text-gray-300"
            />
            <span
              className="text-xs md:text-sm p-3 cursor-pointer w-full max-w-14 text-center font-semibold hover:text-red-600 dark:hover:text-red-600 dark:text-darkText"
              onMouseEnter={() => setShowPassword(true)}
              onMouseLeave={() => setShowPassword(false)}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center text-xs sm:text-sm dark:text-gray-300">
          <label
            htmlFor="remember"
            className="flex items-center gap-1 cursor-pointer hover:text-red-600"
          >
            <input
              type="checkbox"
              name="remember"
              id="remember"
              className="w-4 h-4 cursor-pointer"
            />
            Remember me
          </label>
          <p className="cursor-pointer hover:text-red-600">Forgot Password?</p>
        </div>
        <div className="w-full grid gap-4 mt-4">
          <button className="w-full py-3 bg-black text-white font-semibold rounded dark:text-black dark:bg-white dark:hover:text-darkText hover:bg-gray-800 dark:hover:bg-gray-600">
            Sign in
          </button>
          <Link
            to="/register"
            className="w-full py-3 text-center font-semibold border border-black dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-darkText"
          >
            Become an H&M Member
          </Link>
          <p className="text-center text-sm dark:text-gray-300 cursor-pointer hover:text-red-600 dark:hover:text-red-600">
            H&M Membership
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
