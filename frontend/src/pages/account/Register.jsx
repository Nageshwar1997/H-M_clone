import React, { useState } from "react";
import NavigationPath from "../../customer/components/common/NavigationPath";
import { Link } from "react-router-dom";
import { IoIosCheckmark, IoIosClose } from "react-icons/io";
import {
  handleNamePrevention,
  handlePhoneNumberPrevention,
  handleSpacePrevention,
} from "../../helpers/customer/register.helpers";

const Register = () => {
  const [showPasswordProps, setShowPasswordProps] = useState(false);
  const [showEmailValidation, setShowEmailValidation] = useState(false);
  const [showPhoneValidation, setShowPhoneValidation] = useState(false);
  const [showConfirmPasswordValidation, setShowConfirmPasswordValidation] =
    useState(false);
  const [showPasswordStrength, setShowPasswordStrength] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [dob, setDob] = useState({
    day: "",
    month: "",
    year: "",
  });

  // States to track password validation
  const [passwordValidation, setPasswordValidation] = useState({
    hasSymbol: false,
    hasUppercase: false,
    hasLowercase: false,
    hasNumber: false,
    isValidLength: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    let newValue = value;

    if (name === "phone") {
      newValue = value.replace(/\D/g, "").slice(0, 11);

      if (newValue.length === 10) {
        setShowPhoneValidation(false);
      } else {
        setShowPhoneValidation(true);
      }
    }

    if (name === "email") {
      setTimeout(() => {
        if (!validateEmail(newValue) && newValue.length >= 10) {
          setShowEmailValidation(true);
        } else {
          setShowEmailValidation(false);
        }
      }, 1000);
    }

    if (name === "password") {
      setShowPasswordStrength(true);
      setShowPasswordProps(true);
      validatePassword(newValue);
    }

    if (name === "confirmPassword" && newValue.length > 0) {
      setShowConfirmPasswordValidation(true);
    }

    setData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };

  const handleDateOfBirthChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;

    // Remove any non-digit characters
    updatedValue = updatedValue.replace(/\D/g, "");

    // Get current date values
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // Months are zero-indexed in JavaScript
    const currentDay = currentDate.getDate();

    // Handle year input
    if (name === "year") {
      if (parseInt(updatedValue, 10) > currentYear) {
        updatedValue = currentYear.toString();
        if (updatedValue.length > 4) {
          setDob((prev) => ({
            ...prev,
            month: "",
            day: "",
          }));
        }
      } else {
        setDob({ ...dob, [name]: updatedValue });
      }
    }

    // Handle month input
    else if (name === "month") {
      if (
        dob.year === currentYear.toString() &&
        parseInt(updatedValue, 10) > currentMonth
      ) {
        updatedValue = currentMonth.toString().padStart(2, "0");
      }
      if (parseInt(updatedValue, 10) > 12) {
        updatedValue = "12";
      }
      setDob({ ...dob, [name]: updatedValue });
    }

    // Handle day input
    else if (name === "day") {
      const month = parseInt(dob.month, 10);
      const year = parseInt(dob.year, 10);
      let maxDay = 31;

      if ([4, 6, 9, 11].includes(month)) {
        maxDay = 30;
      } else if (month === 2) {
        if (isLeapYear(year)) {
          maxDay = 29;
        } else {
          maxDay = 28;
        }
      }

      // Restrict day input to the max number of days in the selected month
      if (parseInt(updatedValue, 10) > maxDay) {
        updatedValue = maxDay.toString();
        setDob({ ...dob, [name]: updatedValue });
      }

      // Prevent future day input if month and year are the current month and year
      if (
        dob.year === currentYear.toString() &&
        dob.month === currentMonth.toString().padStart(2, "0") &&
        parseInt(updatedValue, 10) > currentDay
      ) {
        updatedValue = currentDay.toString().padStart(2, "0");
      }
      setDob({ ...dob, [name]: updatedValue });
    }

    // Restrict the number of digits to 2 for day and month
    if ((name === "day" || name === "month") && updatedValue.length > 2) {
      updatedValue = updatedValue.slice(0, 2);
      setDob({ ...dob, [name]: updatedValue });
    }

    // Restrict the number of digits to 4 for year
    if (name === "year" && updatedValue.length > 4) {
      updatedValue = updatedValue.slice(0, 4);
      setDob({ ...dob, [name]: updatedValue });
    }
  };

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const validatePassword = (password) => {
    // Define regular expressions
    const hasSymbol = /[!@#$%^&*\-_=+.><?/\\|()[\]{}]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const isValidLength = password.length >= 8;

    setPasswordValidation({
      hasSymbol,
      hasUppercase,
      hasLowercase,
      hasNumber,
      isValidLength,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Proceed with form submission (e.g., API call)
    console.log("Form submitted", data, dob);
  };

  console.log("Data:", data);
  console.log("DOB:", Object.values(dob).reverse().join("-"));

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
      <form
        onSubmit={handleFormSubmit}
        className="w-full h-fit py-2 grid gap-4 px-6 sm:px-12 lg:px-24"
      >
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="w-full">
            <label
              htmlFor="firstName"
              className="text-xs md:text-sm dark:text-gray-300 hover:text-red-600 dark:hover:text-red-600 cursor-pointer"
            >
              First Name: <strong className="text-red-600">*</strong>
            </label>
            <input
              required
              type="text"
              name="firstName"
              id="firstName"
              value={data.firstName}
              onChange={handleInputChange}
              onKeyDown={handleNamePrevention}
              placeholder="Enter your first name"
              className="w-full p-3 border border-gray-400 rounded focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 focus-within:border-black dark:focus-within:border-white"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="lastName"
              className="text-xs md:text-sm dark:text-gray-300 hover:text-red-600 dark:hover:text-red-600 cursor-pointer"
            >
              Last Name: <strong className="text-red-600">*</strong>
            </label>
            <input
              required
              type="text"
              name="lastName"
              id="lastName"
              value={data.lastName}
              onChange={handleInputChange}
              onKeyDown={handleNamePrevention}
              placeholder="Enter your last name"
              className="w-full p-3 border border-gray-400 rounded focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 focus-within:border-black dark:focus-within:border-white"
            />
          </div>
        </div>
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="w-full">
            <label
              htmlFor="day"
              className="text-xs md:text-sm dark:text-gray-300 hover:text-red-600 dark:hover:text-red-600 cursor-pointer"
            >
              Date of Birth: <strong className="text-red-600">*</strong>
            </label>
            <div className="flex gap-2 w-full">
              <input
                required
                name="year"
                type="text"
                value={dob.year}
                onChange={handleDateOfBirthChange}
                onKeyDown={(e) => handleSpacePrevention(e)}
                placeholder="YYYY"
                className="w-1/3 text-center p-3 border border-gray-400 rounded focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 focus-within:border-black dark:focus-within:border-white"
              />
              <input
                required
                name="month"
                type="text"
                disabled={dob.year.length < 4}
                value={dob.month}
                onChange={handleDateOfBirthChange}
                onKeyDown={(e) => handleSpacePrevention(e)}
                placeholder="MM"
                className={`w-1/3 p-3 text-center border border-gray-400 rounded focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 ${
                  dob.year.length < 4 && "cursor-not-allowed"
                } focus-within:border-black dark:focus-within:border-white`}
                title={
                  dob.year.length < 4
                    ? "Please enter a valid year"
                    : "Month should be between 01 and 12"
                }
              />
              <input
                required
                name="day"
                id="day"
                type="text"
                value={dob.day}
                onChange={handleDateOfBirthChange}
                onKeyDown={(e) => handleSpacePrevention(e)}
                placeholder="DD"
                className={`w-1/3 p-3 text-center border border-gray-400 rounded focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 ${
                  (dob.year.length < 4 || dob.month.length < 2) &&
                  "cursor-not-allowed"
                } focus-within:border-black dark:focus-within:border-white`}
              />
            </div>
          </div>
          <div className="w-full">
            <label
              htmlFor="gender"
              className="text-xs md:text-sm dark:text-gray-300 hover:text-red-600 dark:hover:text-red-600 cursor-pointer"
            >
              Gender: <strong className="text-red-600">*</strong>
            </label>
            <select
              required
              name="gender"
              id="gender"
              value={data.gender}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-400 rounded focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 focus-within:border-black dark:focus-within:border-white"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="w-full relative">
          <label
            htmlFor="email"
            className="text-xs md:text-sm dark:text-gray-300 hover:text-red-600 dark:hover:text-red-600 cursor-pointer"
          >
            Email: <strong className="text-red-600">*</strong>
          </label>
          <input
            required
            type="email"
            name="email"
            id="email"
            value={data.email}
            onChange={handleInputChange}
            onKeyDown={(e) => handleSpacePrevention(e)}
            placeholder="Enter Your Email"
            className="w-full p-3 border border-gray-400 rounded focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 focus-within:border-black dark:focus-within:border-white"
          />
          {showEmailValidation && (
            <p className="text-xs text-red-600 absolute -bottom-3.5">
              Please enter a valid email address
            </p>
          )}
        </div>
        <div className="w-full">
          <label
            htmlFor="phone"
            className="text-xs md:text-sm dark:text-gray-300 hover:text-red-600 dark:hover:text-red-600 cursor-pointer"
          >
            Phone: <strong className="text-red-600">*</strong>
          </label>
          <div className="relative flex items-center w-full border border-gray-400 dark:border-gray-600 dark:bg-gray-800 rounded-lg focus-within:border-black dark:focus-within:border-white">
            <div className="flex items-center px-3 py-2 text-gray-700 dark:text-gray-300 border-r-2 border-r-gray-400">
              <p>+91</p>
            </div>
            <div className="w-full ">
              <input
                required
                type="text"
                name="phone"
                id="phone"
                value={data.phone}
                onChange={handleInputChange}
                onKeyDown={handlePhoneNumberPrevention}
                placeholder="Enter Your Phone Number"
                className="w-full p-3 bg-transparent focus:outline-none dark:text-gray-300"
              />
            </div>
            {showPhoneValidation &&
              (data.phone.length > 10 ? (
                <p className="absolute -bottom-[18px] left-0 text-red-600 text-xs sm:text-sm">
                  Invalid Phone Number
                </p>
              ) : (
                <p className="absolute -bottom-[18px] left-0 text-red-500 text-xs sm:text-sm">
                  Phone Number Should be 10 digits
                </p>
              ))}
          </div>
        </div>

        <div className="w-full">
          <label
            htmlFor="password"
            className="text-xs md:text-sm dark:text-gray-300 hover:text-red-600 dark:hover:text-red-600 cursor-pointer"
          >
            Create a Password: <strong className="text-red-600">*</strong>
          </label>
          <div className="w-full flex items-center border border-gray-400 rounded dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 focus-within:border-black dark:focus-within:border-white">
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              value={data.password}
              onChange={handleInputChange}
              onKeyDown={(e) => handleSpacePrevention(e)}
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
          {showPasswordStrength && (
            <div className="flex items-center gap-1 text-sm sm:text-[0.8rem] md:text-[0.9rem] dark:text-darkText">
              Password strength:{" "}
              <span
                className={`${
                  data.password.length < 8
                    ? "bg-red-600 px-10"
                    : data.password.length < 10
                    ? "bg-yellow-400 px-16"
                    : "bg-green-600 px-20"
                } py-1.5 rounded`}
              ></span>{" "}
              <span>
                {data.password.length < 8
                  ? "Weak"
                  : data.password.length < 10
                  ? "Medium"
                  : "Strong"}
              </span>
            </div>
          )}
          {showPasswordProps ? (
            <div className="flex items-center gap-0 sm:gap-1 font-semibold flex-wrap text-xs sm:text-sm md:text-[0.8rem]">
              <div
                className={`flex items-center ${
                  passwordValidation.isValidLength
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                8 Characters{" "}
                {passwordValidation.isValidLength ? (
                  <IoIosCheckmark className="text-2xl" />
                ) : (
                  <IoIosClose className="text-2xl" />
                )}
              </div>
              <div
                className={`flex items-center ${
                  passwordValidation.hasLowercase
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                1 Lowercase{" "}
                {passwordValidation.hasLowercase ? (
                  <IoIosCheckmark className="text-2xl" />
                ) : (
                  <IoIosClose className="text-2xl" />
                )}
              </div>
              <div
                className={`flex items-center ${
                  passwordValidation.hasUppercase
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                1 Uppercase{" "}
                {passwordValidation.hasUppercase ? (
                  <IoIosCheckmark className="text-2xl" />
                ) : (
                  <IoIosClose className="text-2xl" />
                )}
              </div>
              <div
                className={`flex items-center ${
                  passwordValidation.hasNumber
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                1 Number{" "}
                {passwordValidation.hasNumber ? (
                  <IoIosCheckmark className="text-2xl" />
                ) : (
                  <IoIosClose className="text-2xl" />
                )}
              </div>
              <div
                className={`flex items-center ${
                  passwordValidation.hasSymbol
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                1 Symbol{" "}
                {passwordValidation.hasSymbol ? (
                  <IoIosCheckmark className="text-2xl" />
                ) : (
                  <IoIosClose className="text-2xl" />
                )}
              </div>
            </div>
          ) : (
            <div className="text-[0.65rem] sm:text-sm dark:text-darkText">
              <span>8 Characters</span> <span>1 Lowercase</span>{" "}
              <span>1 Uppercase</span> <span>1 Number</span>{" "}
              <span>1 Symbol</span>
            </div>
          )}
        </div>
        <div className="w-full">
          <label
            htmlFor="confirmPassword"
            className="text-xs md:text-sm dark:text-gray-300 hover:text-red-600 dark:hover:text-red-600 cursor-pointer"
          >
            Confirm Password: <strong className="text-red-600">*</strong>
          </label>
          <div className="w-full flex items-center border border-gray-400 rounded dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 focus-within:border-black dark:focus-within:border-white">
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              value={data.confirmPassword}
              onChange={handleInputChange}
              onKeyDown={(e) => handleSpacePrevention(e)}
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
          {showConfirmPasswordValidation &&
            (data.password === data.confirmPassword &&
            data.confirmPassword.length === data.password.length ? (
              <p className="text-green-600 text-xs sm:text-sm">
                Password Matched
              </p>
            ) : (
              data.password !== data.confirmPassword &&
              data.confirmPassword.length >= data.password.length && (
                <p className="text-red-600 text-xs sm:text-sm">
                  Password Not Matched
                </p>
              )
            ))}
        </div>
        <div className="w-full grid gap-2 mt-1">
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
          <button
            type="submit"
            className="w-full py-3 bg-black text-white font-semibold rounded dark:text-black dark:bg-white dark:hover:text-darkText hover:bg-gray-800 dark:hover:bg-gray-600"
          >
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
