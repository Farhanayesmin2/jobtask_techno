import { Link } from 'react-router-dom';
import { IoArrowForward } from "react-icons/io5";

const LearnMore = () => {
    return (
        <>
            <Link to="/about" className="lg:inline-block  lg:flex-none lg:items-start flex items-center lg:justify-start justify-center text-[#4262FF] mb-4">
                <span className="flex items-center text-start border-[#4262FF] border-b">
                    Learn More  <IoArrowForward className="ml-2" />
                </span>
            </Link>

        </>
    );
};

export default LearnMore;