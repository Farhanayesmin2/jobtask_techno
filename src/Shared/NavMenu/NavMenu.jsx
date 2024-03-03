
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../public/miro.svg";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";

const Navmenu = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <div className="container mx-auto lg:mx-8 w-[1432px] h-[91px] bg-white border-b border-zinc-300 flex justify-between items-center">
            {/* Left side with logo and menu */}
            <div className="flex items-center">
                {/* Logo */}
                <img className="" src={logo} alt="Logo" />

                {/* Menu items */}
                <nav className="hidden lg:flex items-start gap-2 ml-4 mr-2">
                    {/* Product */}
                    <div className="relative flex items-center">
                        <Link to='/' className="text-black cursor-pointer hover:underline">Product</Link>
                        <RiArrowDropDownLine className="text-black text-3xl cursor-pointer ml-0" onClick={() => toggleDropdown('product')} />

                        {/* Dropdown Content */}
                        {isDropdownOpen === 'product' && (
                            <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md overflow-hidden z-10">
                                <li>
                                    <Link to='/service1' className="block px-4 py-2 text-sm text-gray-700 hover:text-cyan-700 hover:font-bold">Service 1</Link>
                                </li>
                                <li>
                                    <Link to='/service2' className="block px-4 py-2 text-sm text-gray-700 hover:text-cyan-700 hover:font-bold">Service 2</Link>
                                </li>
                            </ul>
                        )}
                    </div>
                    {/* Solutions */}
                    <div className="relative flex items-center">
                        <Link to='/' className="text-black cursor-pointer hover:underline">Solutions</Link>
                        <RiArrowDropDownLine className="text-black text-3xl cursor-pointer ml-0" onClick={() => toggleDropdown('solutions')} />

                        {/* Dropdown Content */}
                        {isDropdownOpen === 'solutions' && (
                            <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md overflow-hidden z-10">
                                <li>
                                    <Link to='/service1' className="block px-4 py-2 text-sm text-gray-700 hover:text-cyan-700 hover:font-bold">Service 1</Link>
                                </li>
                                <li>
                                    <Link to='/service2' className="block px-4 py-2 text-sm text-gray-700 hover:text-cyan-700 hover:font-bold">Service 2</Link>
                                </li>
                            </ul>
                        )}
                    </div>
                    {/* Resources */}
                    <div className="relative flex items-center">
                        <Link to='/' className="text-black cursor-pointer hover:underline">Resources</Link>
                        <RiArrowDropDownLine className="text-black text-3xl cursor-pointer ml-0" onClick={() => toggleDropdown('resources')} />

                        {/* Dropdown Content */}
                        {isDropdownOpen === 'resources' && (
                            <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md overflow-hidden z-10">
                                <li>
                                    <Link to='/service1' className="block px-4 py-2 text-sm text-gray-700 hover:text-cyan-700 hover:font-bold">Service 1</Link>
                                </li>
                                <li>
                                    <Link to='/service2' className="block px-4 py-2 text-sm text-gray-700 hover:text-cyan-700 hover:font-bold">Service 2</Link>
                                </li>
                            </ul>
                        )}

                        <Link to='/enterprise' className="text-black ml-1 cursor-pointer hover:underline">Enterprise</Link>
                        <Link to='/pricing' className="text-black ml-3 cursor-pointer hover:underline">Pricing</Link>

                    </div>
                </nav>

            </div>

            {/* Right side with login button, global icon, and language change */}
            {/* Right side with global icon, language change, contact sales, login button, and sign up button */}
            <div className="flex items-center">
                {/* Global icon */}
                <div className="mr-5 flex items-center">
                    <AiOutlineGlobal className="w-6 h-6" />


                    {/* Language change */}
                    <select className="text-black  bg-white outline-0  cursor-pointer mr-5">
                        <option value="en">EN</option>
                        <option value="bn">BN</option>
                        {/* Add more language options as needed */}
                    </select>

                    {/* Contact sales */}
                    <div className="mr-5">Contact Sales</div>

                    {/* Login button */}
                    <button className="text-black  cursor-pointer hover:underline mr-5">Login</button>

                    {/* Sign up button */}

                    <Link
                        to="#"
                        className="inline-flex items-center justify-center text-sm border border-[#4262FF] w-[auto] h-[50px] rounded-full bg-[#4262FF] px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                    >
                        <span className="flex items-center">
                            <span className="text-sm"> Sign up free</span>
                            <FaArrowRightLong className="ml-1" />
                        </span>
                    </Link>

                </div>
            </div>

            {/* Dropdown Content */}
            {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 w-60 bg-white shadow-lg rounded-md overflow-hidden z-10">
                    <li>
                        <Link to='/service1' className="block px-4 py-2 text-sm text-gray-700 hover:text-cyan-700 hover:font-bold">Service 1</Link>
                    </li>
                    <li>
                        <Link to='/service2' className="block px-4 py-2 text-sm text-gray-700 hover:text-cyan-700 hover:font-bold">Service 2</Link>
                    </li>
                    {/* Add more dropdown items as needed */}
                </ul>
            )}
        </div>
    );
};

export default Navmenu;
