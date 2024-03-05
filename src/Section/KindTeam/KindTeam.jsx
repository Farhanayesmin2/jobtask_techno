import BuiltKindTeam from "../../Component/Button/BuiltKindTeam/BuiltKindTeam";
import LearnMore from "../../Component/Button/LearnMore/LearnMore";
import RightSideImage from "../../../public/uxdesignwithoutshadow.jpg.svg";

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
                    <div className='lg:text-start text-center'>
                        <p className="text-lg text-[#050038]">Brainstorming</p>
                        <div className='my-8'>
                            <span className="text-opacity-75   text-[#050038] md:text-sm">Unleash creative ideas and build on<br></br> them with the help of sticky notes, <br></br>images, mind maps, videos, drawing<br></br> capabilities — the list goes on.</span>
                        </div>  </div>
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