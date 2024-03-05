import BuiltKindTeam from "../../Component/Button/BuiltKindTeam/BuiltKindTeam";
import LearnMore from "../../Component/Button/LearnMore/LearnMore";
import RightSideImage from "../../../public/uxdesignwithoutshadow.jpg.svg";
import { FaCheck } from "react-icons/fa6";

const KindTeam = () => {
    return (
        <>
            <div className="max-w-5xl mx-auto mt-12 py-8">
                <h1 className="lg:text-5xl text-2xl lg:text-start  text-center text-[#050038] font-bold mb-4">Built for all kinds of teams</h1>
                <div className="">
                    <BuiltKindTeam></BuiltKindTeam>
                </div>
                <div className="mt-8 grid  lg:grid-cols-3   gap-4">
                    <div className="lg:col-span-1 grid-cols-1 justify-center">
                        <div className='lg:text-start text-center text-[#050038] text-opacity-60 '>
                            <ul className="list-disc text-sm ">
                                <li className="flex items-center mb-5">
                                    <FaCheck className="mr-5 text-[#050038]" />
                                    Build low-fi wireframes
                                </li>
                                <li className="flex items-center mb-5">
                                    <FaCheck className="mr-5 text-[#050038] " />
                                    Involve stakeholders in the<br></br> design process
                                </li>
                                <li className="flex items-center mb-5">
                                    <FaCheck className="mr-5 text-[#050038]" />
                                    Run engaging design <br></br> workshops
                                </li>
                            </ul>
                           </div>
                        <LearnMore />
                    </div>
                    <div className="lg:col-span-2 grid-cols-1 ">
                        <img src={RightSideImage} alt="Brainstorming Image" className="rounded-lg" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default KindTeam;