import { Link } from "react-router-dom";


const BuiltKindTeam = () => {
    return (
        <>
        
      <div className="flex flex-wrap lg:justify-start justify-center space-x-3 lg:space-x-4">
        <Link
          to="UXDesign"
          className="bg-white text-sm text-[#050038] hover:bg-[#F1F3FD] rounded-full transition-colors duration-300 p-3"
        >
          UX & Design
        </Link>
        <Link
          to="Marketing"
          className="bg-white text-sm text-[#050038] hover:bg-[#F1F3FD] rounded-full transition-colors duration-300 p-3"
        >
          Marketing
        </Link>
        <Link
          to="ProductManagement"
          className="bg-white text-sm text-[#050038] hover:bg-[#F1F3FD] rounded-full transition-colors duration-300 p-3"
        >
          Product Management
        </Link>
        <Link
          to="Engineering"
          className="bg-white text-sm text-[#050038] hover:bg-[#F1F3FD] rounded-full transition-colors duration-300 p-3"
        >
          Engineering
        </Link>
        <Link
          to="Consultants"
          className="bg-white text-sm text-[#050038] hover:bg-[#F1F3FD] rounded-full transition-colors duration-300 p-3"
        >
          Consultants
        </Link>
        <Link
          to="AgileCoaches"
          className="bg-white text-sm text-[#050038] hover:bg-[#F1F3FD] rounded-full transition-colors duration-300 p-3"
        >
          Agile Coaches
        </Link>
        <Link
          to="Sales"
          className="bg-white text-sm text-[#050038] hover:bg-[#F1F3FD] rounded-full transition-colors duration-300 p-3"
        >
          Sales
        </Link>
      </div>
    
        </>
    );
};

export default BuiltKindTeam;