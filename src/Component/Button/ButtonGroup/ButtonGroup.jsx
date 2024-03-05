import { Link } from 'react-router-dom';

const ButtonGroup = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Built for the way you work</h1>
      <div className="flex space-x-4">
        <Link
          to="/brainstorming"
          className="inline-block bg-white text-[#050038] hover:bg-[#F1F3FD] rounded-full transition-colors duration-300 px-6 py-3"
        >
          Brainstorming
        </Link>
        <Link
          to="/diagramming"
          className="inline-block bg-white text-[#050038] hover:bg-[#F1F3FD] rounded-full transition-colors duration-300 px-6 py-3"
        >
          Diagramming
        </Link>
        <Link
          to="/meetings"
          className="inline-block bg-white text-[#050038] hover:bg-[#F1F3FD] rounded-full transition-colors duration-300 px-6 py-3"
        >
          Meetings & Workshops
        </Link>
        <Link
          to="/scrum"
          className="inline-block bg-white text-[#050038] hover:bg-[#F1F3FD] rounded-full transition-colors duration-300 px-6 py-3"
        >
          Scrum Events
        </Link>
        <Link
          to="/mapping"
          className="inline-block bg-white text-[#050038] hover:bg-[#F1F3FD] rounded-full transition-colors duration-300 px-6 py-3"
        >
          Mapping
        </Link>
        <Link
          to="/research"
          className="inline-block bg-white text-[#050038] hover:bg-[#F1F3FD] rounded-full transition-colors duration-300 px-6 py-3"
        >
          Research & Design
        </Link>
        <Link
          to="/strategic"
          className="inline-block bg-white text-[#050038] hover:bg-[#F1F3FD] rounded-full transition-colors duration-300 px-6 py-3"
        >
          Strategic Planning
        </Link>
      </div>
    </div>
  );
};

export default ButtonGroup;
