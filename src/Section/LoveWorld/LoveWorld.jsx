import CustomersButton from "../../Component/Button/CustomersButton/CustomersButton";
import Docusign from "../../../public/Docusign.svg";
import frog from "../../../public/frog.svg";
import vmware from "../../../public/vmware.svg";
const LoveWorld = () => {
    return (
        <>
            {/* Main div */}
            <div className="max-w-5xl mx-auto mt-12">
                {/* Header and button div */}
                <div>
                <h1 className="lg:text-5xl text-2xl  text-center text-[#050038] font-bold mb-4">Loved by the world's best teams</h1>
                    <CustomersButton></CustomersButton>
                </div>
                {/* Text div is here */}
                <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {/* Three grid text paragraphs */}
                    <div className="text-center lg:text-justify w-[360px] h-[460px]">
                    <img src={vmware} alt="docusign" className="mb-5" />
                        <span className="text-[#050038] text-opacity-60 text-sm text-justify	">
                        “When the pandemic hit, those of us <br></br> who thrive on in-person <br></br> collaboration were worried that our <br></br>creativity and productivity would<br></br> suffer. Miro was the perfect tool to <br></br> help us with collaboration,<br></br> whiteboarding, and retrospectives <br></br> while remote.”
                        </span>
                    </div>
                    <div className="text-center lg:text-justify w-[360px] h-[460px]">
                    <img src={Docusign} alt="docusign" className="mb-5" />
                        <span className="text-[#050038] text-opacity-60 text-sm text-justify	">
                        “Miro helps solve one of the major <br></br> gaps in product design: how to <br></br>manage tasks across product <br></br> designers whose projects are in <br></br> different tools.”
                        </span>
                    </div>
                    <div className="text-center lg:text-justify w-[360px] h-[460px]">
                    <img src={frog} alt="docusign" className="mb-5" />
                        <span className="text-[#050038] text-opacity-60 text-sm text-justify	" >
                        “As we used Miro we moved from <br></br> skepticism to belief to innovation,<br></br> and now we have a tool that’s at <br></br> the core of what we do and will <br></br> continue to extend into the future.”
                        </span>
                    </div>
                </div>






                </div>







            </div>
        </>
    );
};

export default LoveWorld;