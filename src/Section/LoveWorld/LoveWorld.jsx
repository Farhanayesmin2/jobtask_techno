import CustomersButton from "../../Component/Button/CustomersButton/CustomersButton";

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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Three grid text paragraphs */}
                    <div className="text-center lg:text-justify">
                        <p className="text-[#050038] text-lg my-2">Free forever</p>
                        <span className="text-[#050038] text-opacity-60 text-sm text-justify	">
                        “When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.”
                        </span>
                    </div>
                    <div className="text-center lg:text-justify">
                        <p className="text-[#050038] text-lg my-2">Easy integrations</p>
                        <span className="text-[#050038] text-opacity-60 text-sm text-justify	">
                        “Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools.”
                        </span>
                    </div>
                    <div className="text-center lg:text-justify">
                        <p className="text-[#050038] text-lg my-2">Security first</p>
                        <span className="text-[#050038] text-opacity-60 text-sm text-justify	" >
                        “As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that’s at the core of what we do and will continue to extend into the future.”
                        </span>
                    </div>
                </div>






                </div>







            </div>
        </>
    );
};

export default LoveWorld;