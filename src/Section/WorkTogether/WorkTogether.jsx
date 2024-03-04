import workImg from "../../../public/hybridwork.png.svg"
import LearnMore from "../../Component/Button/LearnMore/LearnMore";

const WorkTogether = () => {
    return (
        <>
            <div className="max-w-5xl mx-auto mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8">
                    {/* Text div left side */}
                    <div>
                        <h1 className="text-[#050038] my-6 text-5xl font-bold"> Work together, wherever you work.</h1>
                        <span className="text-opacity-60 text-lg text-[#050038] md:text-lg mb-4">
                            In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.
                        </span>
                        <LearnMore></LearnMore>
                    </div>
                   
                    {/* Image div right side */}
                    <div>
                        <img src={workImg} alt="Team collaboration" className="max-w-full h-auto" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default WorkTogether;
