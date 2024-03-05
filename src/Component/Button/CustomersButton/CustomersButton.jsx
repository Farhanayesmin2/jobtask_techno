import { Link } from "react-router-dom";


const CustomersButton = () => {
    return (
        <>
        <Link to="/customers"  className="bg-white text-[#4262FF] text-sm rounded-full border border-[#4262FF]"   >
            See all customer stories →</Link>
        </>
    );
};

export default CustomersButton;