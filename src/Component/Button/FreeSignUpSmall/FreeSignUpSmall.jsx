import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";


const FreeSignUpSmall = () => {
    return (
        <div>
            
          {/* Sign up button */}
          <Link
            to="#"
            className="inline-flex items-center justify-center text-sm border border-[#4262FF] rounded-full bg-[#4262FF] lg:px-6 px-3 py-1 lg:py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          >
            <span className="flex items-center">
              <span className="lg:text-sm  text-xs"> Sign up free</span>
              <FaArrowRightLong className="ml-1" />
            </span>
          </Link>
        </div>
    );
};

export default FreeSignUpSmall;