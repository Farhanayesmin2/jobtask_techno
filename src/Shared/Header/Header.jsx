import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import img1 from "../../../public/g.svg";
import img2 from "../../../public/get.svg";
import img3 from "../../../public/cap.svg";
import img4 from "../../../public/headerimage-without-text.svg";

const Header = () => {
    return (
        <section className=" my-12">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-0 items-start">
                <div className="flex flex-col space-y-4 md:space-y-6  lg:mx-0 mx-5 lg:my-0  ">
                    <h1 className="text-xl lg:text-5xl md:text-4xl text-[#050038] font-bold">Take ideas from better to best</h1>
                    <p className='text-base md:text-lg space-y-1 text-[#050038]'> Miro is your team's visual platform to connect,<br /> collaborate, and create — together.</p>
                    <div className="flex flex-col space-y-4 items-start">
                        <input type="email" placeholder="Enter your work email" className="py-2 px-4 w-full md:w-96 border-gray-400 border outline-none rounded-full" />
                        <button className="bg-[#4262FF] text-white py-2 px-4 w-full md:w-96 rounded-full">Sign up free →</button>
                    </div>
                    <div className='flex bg-[#F5F5F7] w-[350px] p-[14px]'>
                        <div className="flex flex-col items-start">
                            <div className="flex items-center">
                                {[...Array(4)].map((_, index) => (
                                    <FaStar key={index} className='text-[#FF9D48]' />
                                ))}
                                <FaStarHalfAlt className='text-[#FF9D48]' />
                            </div>
                            <span className="text-xs mt-1 text-[#050038]">Based on 5149+ reviews</span>
                        </div>
                        <div className="ml-4 flex items-center justify-center gap-5">
                            <img className="mb-2 w-[20px] h-[32px] aspect-w-[376px] aspect-h-[750px] md:aspect-h-[1500px]" src={img1} alt="Logo" />
                            <img className="mb-2 w-[50px] h-[32px] aspect-w-[376px] aspect-h-[750px] md:aspect-h-[1500px]" src={img2} alt="Logo" />
                            <img className="w-[60px] h-[32px] aspect-w-[376px] aspect-h-[750px] md:aspect-h-[1500px]" src={img3} alt="Logo" />
                        </div>
                    </div>
                </div>
                <div className="md:pl-8">
                    <img src={img4} alt="Image-header"  />
                </div>
            </div>
        </section>
    );
};

export default Header;
