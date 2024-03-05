import { Link } from 'react-router-dom';

const ButtonGroup = () => {
  return (
    <>
     
      <div className="flex flex-wrap lg:justify-start justify-center space-x-3 lg:space-x-4">
        <Link
          to="/brainstorming"
          className=" bg-white text-sm text-[#050038] hover:bg-[#F1F3FD] rounded-full transition-colors duration-300 p-3"
        >
          Brainstorming
        </Link>
        <Link
          to="/diagramming"
          className=" bg-white text-sm text-[#050038] hover:bg-[#F1F3FD] rounded-full transition-colors duration-300 p-3"
        >
          Diagramming
        </Link>
        <Link
          to="/meetings"
          className=" bg-white text-sm text-[#050038] hover:bg-[#F1F3FD] rounded-full transition-colors duration-300 p-3"
        >
          Meetings & Workshops
        </Link>
        <Link
          to="/scrum"
          className=" bg-white text-sm text-[#050038] hover:bg-[#F1F3FD] rounded-full transition-colors duration-300 p-3"
        >
          Scrum Events
        </Link>
        <Link
          to="/mapping"
          className=" bg-white text-sm text-[#050038] hover:bg-[#F1F3FD] rounded-full transition-colors duration-300 p-3"
        >
          Mapping
        </Link>
        <Link
          to="/research"
          className=" bg-white text-sm text-[#050038] hover:bg-[#F1F3FD] rounded-full transition-colors duration-300 p-3"
        >
          Research & Design
        </Link>
        <Link
          to="/strategic"
          className=" bg-white text-sm text-[#050038] hover:bg-[#F1F3FD] rounded-full transition-colors duration-300 p-3"
        >
          Strategic Planning
        </Link>
      </div>
    </>
  );
};

export default ButtonGroup;
