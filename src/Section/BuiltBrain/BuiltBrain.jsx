import ButtonGroup from "../../Component/Button/ButtonGroup/ButtonGroup";
import LearnMore from "../../Component/Button/LearnMore/LearnMore";

const BuiltBrain = () => {
    return (
        <>
            <div className="max-w-5xl mx-auto mt-12 py-8">
                <h1 className="text-5xl text-[#050038] font-bold mb-4">Built for the way you work</h1>
                <div className="flex space-x-4">
                  <ButtonGroup></ButtonGroup>
                </div>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-1">
                        <p className="text-lg  text-[#050038] mb-4">Brainstorming</p>
<div className="my-8">
<span className=" text-opacity-75 text-[#050038] md:text-sm">Unleash creative ideas and build on <br></br> them with the help of sticky notes,<br></br> images, mind maps, videos, drawing<br></br> capabilities — the list goes on.</span>
</div>
                       
                        <LearnMore></LearnMore>
                    </div>
                    <div className="md:col-span-1">
                        <img src="https://via.placeholder.com/150" alt="Brainstorming Image" className="rounded-lg" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BuiltBrain;