import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";


const ViewReport = () => {
    return (
        <>
            <Link to="/report" className="flex w-40 text-center justify-center bg-[#4262FF] text-white p-2 text-sm  rounded-full  items-center">
                    View the report <AiOutlineArrowRight className="ml-1" />
                </Link>
        </>
    );
};

export default ViewReport;