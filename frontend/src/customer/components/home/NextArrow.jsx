import { FaArrowRight } from "react-icons/fa";

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gradient-to-r from-gray-600 to-gray-800 p-2 rounded-full cursor-pointer z-10 shadow-lg hover:bg-gray-700 transition-all duration-300"
      onClick={onClick}
    >
      <FaArrowRight className="text-white" />
    </div>
  );
};

export default NextArrow;
