import  { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../../../public/miro.svg";
import { AiOutlineGlobal } from "react-icons/ai";
import FreeSignUpSmall from "../../Component/Button/FreeSignUpSmall/FreeSignUpSmall";

const Navmenu = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="bg-white border-b border-zinc-300  ">
      <div className="container mx-auto px-4 py-4 mx-30 flex justify-between items-center">
        {/* Left side with logo and menu */}
        <div className="flex items-center">
          {/* Logo */}
          <img className="lg:h-10 h-14  mr-4" src={logo} alt="Logo" />

          {/* Menu items */}
          <nav className="hidden lg:flex items-center gap-4">
            {/* Product */}
            <div
              className="relative flex items-center cursor-pointer"
              onClick={() => toggleDropdown("product")}
            >
              <Link
                to="/"
                className="text-[#050038] cursor-pointer hover:underline"
              >
                Product
              </Link>
              <RiArrowDropDownLine className="text-[#050038] text-2xl cursor-pointer " />
              {openDropdown === "product" && (
                <div className="absolute top-full left-0 bg-white shadow-lg py-2 px-4 flex flex-col">
                  <Link
                    to="/service1"
                    className="text-[#050038] cursor-pointer hover:underline mb-2"
                  >
                    Service 1
                  </Link>
                  <Link
                    to="/service2"
                    className="text-[#050038] cursor-pointer hover:underline mb-2"
                  >
                    Service 2
                  </Link>
                </div>
              )}
            </div>

            {/* Solutions */}
            <div
              className="relative flex items-center cursor-pointer"
              onClick={() => toggleDropdown("solutions")}
            >
              <Link
                to="/solutions"
                className="text-[#050038] cursor-pointer hover:underline"
              >
                Solutions
              </Link>
              <RiArrowDropDownLine className="text-[#050038] text-2xl cursor-pointer ml-1" />
              {openDropdown === "solutions" && (
                <div className="absolute top-full left-0 bg-white shadow-lg py-2 px-4 flex flex-col">
                  <Link
                    to="/service1"
                    className="text-[#050038] cursor-pointer hover:underline mb-2"
                  >
                    Service 1
                  </Link>
                  <Link
                    to="/service2"
                    className="text-[#050038] cursor-pointer hover:underline mb-2"
                  >
                    Service 2
                  </Link>
                </div>
              )}
            </div>

            {/* Resources */}
            <div
              className="relative flex items-center cursor-pointer"
              onClick={() => toggleDropdown("resources")}
            >
              <Link
                to="/resources"
                className="text-[#050038] cursor-pointer hover:underline"
              >
                Resources
              </Link>
              <RiArrowDropDownLine className="text-[#050038] text-2xl cursor-pointer ml-1" />
              {openDropdown === "resources" && (
                <div className="absolute top-full left-0 bg-white shadow-lg py-2 px-4 flex flex-col">
                  <Link
                    to="/service1"
                    className="text-[#050038] cursor-pointer hover:underline mb-2"
                  >
                    Service 1
                  </Link>
                  <Link
                    to="/service2"
                    className="text-[#050038] cursor-pointer hover:underline mb-2"
                  >
                    Service 2
                  </Link>
                </div>
              )}
            </div>

            {/* Enterprise */}
            <Link
              to="/enterprise"
              className="text-[#050038] cursor-pointer hover:underline"
            >
              Enterprise
            </Link>

            {/* Pricing */}
            <Link
              to="/pricing"
              className="text-[#050038] cursor-pointer hover:underline"
            >
              Pricing
            </Link>
          </nav>
        </div>

        {/* Right side with login button, global icon, and language change */}
        <div className="flex items-center   space-x-5">
          {/* Global icon */}
          <div className="flex items-center">
            <AiOutlineGlobal className="w-6 h-6" />

            {/* Language change */}
            <select className="text-[#050038] bg-white outline-0 cursor-pointer ml-2">
              <option value="en">EN</option>
              <option value="bn">BN</option>
              {/* Add more language options as needed */}
            </select>
          </div>

          {/* Contact sales */}
          <div className="cursor-pointer lg:text-lg text-xs">Contact Sales</div>

          {/* Login button */}
          <button className="text-[#050038] lg:text-lg text-xs cursor-pointer hover:underline">
            Login
          </button>
          {/* Sign up button */}
        <FreeSignUpSmall></FreeSignUpSmall>
        </div>
      </div>
    </div>
  );
};

export default Navmenu;
