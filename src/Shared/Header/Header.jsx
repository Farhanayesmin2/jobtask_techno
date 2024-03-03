import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <section className="flex w-[1140px] h-[470px]  translate-x-[80px] translate-y-[80px] mx-auto flex-col md:flex-row gap-8 items-stretch">
    {/* Left side header text and buttons */}
    <div className="md:w-1/2 flex flex-col space-y-4">
      <div>
        <h1 className="text-5xl w-[375px] text-[#050038] font-bold">Take ideas from better to best</h1>
        <p  className='text-sm mt-2 text-gray-800'> Miro is your teams visual platform to connect,<br></br> collaborate, and create — together.</p>
      </div>
      <div className="flex space-x-4 items-center">
        <input type="email" placeholder="Enter your work email" className="py-2 px-4 border rounded-md" />
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md">Sign up free →</button>
      </div>
      {/* Small text after buttons */}
      <p className="text-sm">Collaborate with your team within minutes</p>
      {/* 5 star icon */}
      <div className="flex items-center">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfAlt />
        <span className="ml-2">Based on 5149+ reviews</span>
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
