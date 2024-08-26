import React, { useState } from "react";
import NavigationPath from "../../customer/components/common/NavigationPath";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedLoginOption, setSelectedLoginOption] = useState("email");
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    phone: "",
    password: "",
  });

  return (
    <div className="max-w-[45rem] w-full mx-auto flex flex-col gap-1 px-4 sm:px-6 lg:px-8">
      <NavigationPath />
      <h3 className="text-center text-sm sm:text-lg md:text-xl font-bold mb-4">
        Sign in
      </h3>
      <p className="text-center text-xs sm:text-sm mb-4">
        Become a member — don't miss out on deals, offers, discounts and bonus
        vouchers.
      </p>
      <form className="w-full h-fit py-2 grid gap-4 px-24">
        <div className="w-full flex space-x-1 text-xs sm:text-sm">
          <p>Login Using :</p>
          <div className="flex justify-center space-x-2">
            <label
              htmlFor="loginOptionEmail"
              className="flex justify-center items-center gap-1 cursor-pointer"
            >
              <input
                type="radio"
                className="w-4 h-4 ml-1 cursor-pointer"
                name="loginOption"
                id="loginOptionEmail"
                value="email"
                checked={selectedLoginOption === "email"}
                onChange={() => setSelectedLoginOption("email")}
              />
              Email
            </label>
            <label
              htmlFor="loginOptionPhone"
              className="flex justify-center items-center gap-1 cursor-pointer"
            >
              <input
                type="radio"
                className="w-4 h-4 ml-1"
                name="loginOption"
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
            className="text-xs sm:text-sm hover:text-red-600 cursor-pointer"
          >
            {selectedLoginOption === "email" ? "Email : " : "Phone : "}
          </label>
          <div className="flex items-center w-full border border-gray-600 bg-[#E8F0FE]">
            {selectedLoginOption === "phone" && (
              <div className="text-gray-800 flex">
                <p className="px-2">+91</p>
                <div className="border-r border-gray-600"></div>
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
              className="w-full p-3 bg-transparent focus-within:outline-none"
            />
          </div>
        </div>
        <div className="w-full grid gap-1">
          <label
            htmlFor={selectedLoginOption === "email" ? "email" : "phone"}
            className="text-xs sm:text-sm hover:text-red-600 cursor-pointer"
          >
            Password :{" "}
          </label>
          <div className="flex items-center w-full border border-gray-600 bg-[#E8F0FE]">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter Your Password"
              className="w-full p-3 bg-transparent focus-within:outline-none"
            />
            <div
              className="px-2 h-full flex items-center justify-center hover:text-red-600 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {!showPassword ? "Show" : "Hide"}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <label
            htmlFor="remember"
            className="flex items-center gap-1 cursor-pointer hover:text-red-600"
          >
            <input
              type="checkbox"
              name="remember"
              id="remember"
              className="w-5 h-5 cursor-pointer"
            />
            <p>Remember me</p>
          </label>
          <p className="cursor-pointer hover:text-red-600">Forgot Password ?</p>
        </div>
        <div className="w-full grid gap-4">
          <button className="w-full bg-[#222222] py-3 text-white text-lg font-semibold">
            Sign in
          </button>
          <Link to={"/register"} className="w-full py-3 text-lg font-semibold border border-black text-center">
            Become an H&M Member
          </Link>
          <p className="text-center -mt-2">H&M Membership</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
