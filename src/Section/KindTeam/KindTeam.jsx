import BuiltKindTeam from "../../Component/Button/BuiltKindTeam/BuiltKindTeam";
import LearnMore from "../../Component/Button/LearnMore/LearnMore";
import RightSideImage from "../../../public/uxdesignwithoutshadow.jpg.svg";
import { FaCheck } from "react-icons/fa6";
import xd from "../../../public/xd.svg";
import diamond from "../../../public/diamond.svg";
import figma from "../../../public/figma.svg";
import notion from "../../../public/notion.svg";

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
                            <ul className="list-disc text-sm text-center mt-5 lg:text-start ">
                                <li className="flex items-center mb-5">
                                    <FaCheck className="mr-5 lg:ml-0 ml-5 text-[#050038] text-center " />
                                    Build low-fi wireframes
                                </li>
                                <li className="flex items-center mb-5">
                                    <FaCheck className="mr-5 lg:ml-0 ml-5 text-[#050038] " />
                                    Involve stakeholders in the<br></br> design process
                                </li>
                                <li className="flex items-center mb-5">
                                    <FaCheck className="mr-5  lg:ml-0 ml-5 text-[#050038]" />
                                    Run engaging design <br></br> workshops
                                </li>
                            </ul>
                           </div>
                           <div className="my-10">
                           <LearnMore />
                           </div>

                           <div className="mt-14">


                            <h2 className="text-[#050038] lg:text-start text-center mb-5 text-opacity-60 text-sm"> Integrate your favorite tools</h2>
                            <div className="flex gap-6  lg:items-start lg:justify-start items-center justify-center">
                            <img src={diamond} alt="Brainstorming Image" className="w-[26px] h-[26px]" />
                            <img src={xd} alt="Brainstorming Image" className="w-[26px] h-[26px]" />
                            <img src={figma} alt="Brainstorming Image" className="w-[32px] h-[28px]" />
                            <img src={notion} alt="Brainstorming Image" className="w-[32px] h-[28px]" />
                            </div>
                           
                           </div>
                      
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