import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <section className="flex flex-col md:flex-row gap-8 items-stretch">
      {/* Left side header text and buttons */}
      <div className="md:w-1/2 flex flex-col space-y-4">
        <div>
          <h2 className="text-3xl font-bold">Left Side Header Text</h2>
          <p className="mt-4">Normal text goes here...</p>
        </div>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md">Button 1</button>
          <button className="bg-green-500 text-white py-2 px-4 rounded-md">Button 2</button>
        </div>
        {/* Small text after buttons */}
        <p className="text-sm">Small text after buttons...</p>
        {/* 5 star icon */}
        <div className="flex items-center">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </div>
      </div>

      {/* Right side image */}
      <div className="md:w-1/2">
        <img className="h-full w-full object-cover" src="path_to_your_image.jpg" alt="Image" />
      </div>
    </section>
  );
};

export default Header;
