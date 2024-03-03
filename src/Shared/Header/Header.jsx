import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import img1 from "../../../public/g.svg";
import img2 from "../../../public/get.svg";
import img3 from "../../../public/cap.svg";

const Header = () => {
    return (
        <section className="flex w-[1140px] h-[470px]  translate-x-[80px] translate-y-[80px] mx-auto flex-col md:flex-row gap-8 items-stretch">
            {/* Left side header text and buttons */}
            <div className="md:w-1/2 flex flex-col space-y-4">
                <div>
                    <h1 className="text-5xl w-[375px] text-[#050038] font-bold">Take ideas from better to best</h1>
                    <p className='text-sm mt-2 text-gray-800'> Miro is your teams visual platform to connect,<br></br> collaborate, and create — together.</p>
                </div>
                <div className="flex flex-col space-y-4 items-start
      ">
                    <input type="email" placeholder="Enter your work email" className="py-2 px-4 w-96 border-gray-400  border outline-none rounded-full" />
                    <button className="bg-[#4262FF] text-white py-2 px-4 w-96 rounded-full">Sign up free →</button>

                </div>
                {/* Small
      {/* Small text after buttons */}
                <span className="text-sm text-gray-500/75">Collaborate with your team within minutes</span>
                <div className="flex items-center">
  {/* 5 star icon */}
  <div className='bg-[#F5F5F7] flex items-center justify-center h-[60px] w-[350px] p-[14px]'>
  <div className="flex flex-col items-start ">
    <div className="flex items-center">
      <FaStar className='text-[#FF9D48]' />
      <FaStar className='text-[#FF9D48]' />
      <FaStar className='text-[#FF9D48]' />
      <FaStar className='text-[#FF9D48]' />
      <FaStarHalfAlt className='text-[#FF9D48]' />
    </div>
    <span className="text-xs text-gray-700">Based on 5149+ reviews</span>
 
    </div>
  {/* Images with spacing */}
  <div className="ml-4 flex items-center justify-center gap-5">
    <img className="mb-2 w-[20px] text-black h-[32px]" src={img1} alt="Logo" />
    <img className="mb-2 w-[50px] text-black h-[32px]" src={img2} alt="Logo" />
    <img className="w-[60px] h-[32px] text-black   "  src={img3} alt="Logo" />
  </div>
</div>
</div> </div>

            {/* Right side image */}
            <div className="md:w-1/2">
                <img className="h-full w-full object-cover" src="path_to_your_image.jpg" alt="Image" />
            </div>
        </section>
    );
};

export default Header;
