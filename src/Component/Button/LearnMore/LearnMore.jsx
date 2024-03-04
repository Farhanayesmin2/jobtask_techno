import { Link } from 'react-router-dom';
import { IoArrowForward } from "react-icons/io5";





const LearnMore = () => {
    return (
        <>
            <Link to="#" className="inline-block  text-[#4262FF] px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-blue-600 mb-4">
                <span className="flex items-center">
                    Learn More  <IoArrowForward className="ml-2" />
                </span>
            </Link>

        </>
    );
};

export default LearnMore;