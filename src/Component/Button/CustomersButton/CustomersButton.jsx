import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";

const CustomersButton = () => {
    return (
        <>
            <div className="items-center text-center my-8 flex justify-center">
                <Link to="/about" className=" border-[#4262FF] items-center flex justify-center border p-2  w-[280px] rounded-full   text-[#4262FF]">
                    See all customer stories <IoArrowForward className="ml-2   " />
                </Link>
            </div>
        </>
    );
};

export default CustomersButton;
