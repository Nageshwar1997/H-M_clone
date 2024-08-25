import { FaArrowLeft } from "react-icons/fa";

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gradient-to-r from-gray-600 to-gray-800 p-2 rounded-full cursor-pointer z-10 shadow-lg hover:bg-gray-700 transition-all duration-300"
      onClick={onClick}
    >
      <FaArrowLeft className="text-white" />
    </div>
  );
};

export default PrevArrow;
