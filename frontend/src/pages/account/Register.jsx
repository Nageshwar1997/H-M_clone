import React, { useState } from "react";
import NavigationPath from "../../customer/components/common/NavigationPath";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="max-w-[45rem] w-full mx-auto flex flex-col gap-1 px-4 sm:px-6 lg:px-8">
      <NavigationPath />
      <h3 className="text-center text-sm sm:text-lg md:text-xl font-bold mb-4 dark:text-white">
        Become an H&M member
      </h3>
      <p className="text-center text-xs sm:text-sm mb-4 dark:text-gray-300">
        Become a member — don't miss out on deals, offers, discounts, and bonus
        vouchers.
      </p>
      <form className="w-full h-fit py-2 grid gap-4 px-6 sm:px-12 lg:px-24">
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="w-full">
            <label
              htmlFor="firstName"
              className="text-xs md:text-sm dark:text-gray-300 hover:text-red-600 dark:hover:text-red-600 cursor-pointer"
            >
              First Name:
            </label>
            <input
              type="text"
              placeholder="Enter your first name"
              name="firstName"
              id="firstName"
              className="w-full p-3 border border-gray-400 rounded focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="lastName"
              className="text-xs md:text-sm dark:text-gray-300 hover:text-red-600 dark:hover:text-red-600 cursor-pointer"
            >
              Last Name:
            </label>
            <input
              type="text"
              placeholder="Enter your last name"
              name="lastName"
              id="lastName"
              className="w-full p-3 border border-gray-400 rounded focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
            />
          </div>
        </div>
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="w-full">
            <label
              htmlFor="day"
              className="text-xs md:text-sm dark:text-gray-300 hover:text-red-600 dark:hover:text-red-600 cursor-pointer"
            >
              Date of Birth:
            </label>
            <div className="flex gap-2 w-full">
              <input
                name="day"
                id="day"
                type="text"
                placeholder="DD"
                className="w-1/3 p-3 border border-gray-400 rounded focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
              />
              <input
                name="month"
                type="text"
                placeholder="MM"
                className="w-1/3 p-3 border border-gray-400 rounded focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
              />
              <input
                name="year"
                type="text"
                placeholder="YYYY"
                className="w-1/3 p-3 border border-gray-400 rounded focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
              />
            </div>
          </div>
          <div className="w-full">
            <label
              htmlFor="gender"
              className="text-xs md:text-sm dark:text-gray-300 hover:text-red-600 dark:hover:text-red-600 cursor-pointer"
            >
              Gender:
            </label>
            <select
              name="gender"
              id="gender"
              className="w-full p-3 border border-gray-400 rounded focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="w-full">
          <label
            htmlFor="email"
            className="text-xs md:text-sm dark:text-gray-300 hover:text-red-600 dark:hover:text-red-600 cursor-pointer"
          >
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            className="w-full p-3 border border-gray-400 rounded focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="phone"
            className="text-xs md:text-sm dark:text-gray-300 hover:text-red-600 dark:hover:text-red-600 cursor-pointer"
          >
            Phone:
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Enter Your Phone Number"
            className="w-full p-3 border border-gray-400 rounded focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="password"
            className="text-xs md:text-sm dark:text-gray-300 hover:text-red-600 dark:hover:text-red-600 cursor-pointer"
          >
            Create a Password:
          </label>
          <div className="w-full flex items-center border border-gray-400 rounded dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Enter Your Password"
              className="w-full p-3 bg-transparent focus:outline-none"
            />
            <span
              className="text-xs md:text-sm p-3 cursor-pointer w-full max-w-14 text-center font-semibold hover:text-red-600 dark:hover:text-red-600"
              onMouseEnter={() => setShowPassword(true)}
              onMouseLeave={() => setShowPassword(false)}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>
        </div>
        <div className="w-full">
          <label
            htmlFor="confirmPassword"
            className="text-xs md:text-sm dark:text-gray-300 hover:text-red-600 dark:hover:text-red-600 cursor-pointer"
          >
            Confirm Password:
          </label>
          <div className="w-full flex items-center border border-gray-400 rounded dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Your Password"
              className="w-full p-3 bg-transparent focus:outline-none"
            />
            <span
              className="text-xs md:text-sm p-3 cursor-pointer w-full max-w-14 text-center font-semibold hover:text-red-600 dark:hover:text-red-600"
              onMouseEnter={() => setShowConfirmPassword(true)}
              onMouseLeave={() => setShowConfirmPassword(false)}
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </span>
          </div>
        </div>
        <div className="w-full grid gap-2">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="checkbox"
              name="checkbox"
              className="w-6 h-5 cursor-pointer"
            />
            <label
              htmlFor="checkbox"
              className="text-xs md:text-[0.83rem] cursor-pointer dark:text-darkText"
            >
              Yes, email me offers, style updates, and special invites to sales
              and events.
            </label>
          </div>
          <p className="text-xs md:text-[0.82rem] dark:text-darkText">
            Wish your inbox was more stylish? No problem, just subscribe to our
            newsletter. Find out what's hot and happening in the world of
            fashion, beauty, and home decor. Plus, you'll get bonus vouchers,
            birthday offers, and special invites to sales and events – straight
            to your inbox!
          </p>
          <p className="text-[0.5rem] md:text-xs dark:text-darkText">
            By clicking ‘Become a member’, I agree to the H&M Membership{" "}
            <strong className="text-red-600 underline">
              Terms and conditions
            </strong>
            .
          </p>
          <p className="text-[0.5rem] md:text-xs dark:text-darkText">
            To give you the full membership experience, we will process your
            personal data in accordance with the H&M's{" "}
            <strong className="text-red-600 underline">Privacy Notice</strong>.
          </p>
        </div>
        <div className="w-full text-center mt-4">
          <button className="w-full py-3 bg-black text-white font-semibold rounded dark:text-black dark:bg-white dark:hover:text-darkText hover:bg-gray-800 dark:hover:bg-gray-600">
            Become an H&M Member
          </button>
        </div>
        <Link
          to="/login"
          className="w-full py-3 text-center font-semibold border border-black dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-darkText"
        >
          Back to Sign In
        </Link>
      </form>
    </div>
  );
};

export default Register;
