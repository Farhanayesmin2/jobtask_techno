
import FreeSignUpSmall from "../../Component/Button/FreeSignUpSmall/FreeSignUpSmall";

const Collaboration = () => {
    return (
        <>
            <div className="max-w-5xl mx-auto mt-12">
                {/* First child div */}
                <div className="text-center relative">
                    {/* Header text */}
                    <h1 className="text-[#050038] my-12 text-4xl font-bold">
                        Collaborate without<br />
                        constraints
                    </h1>
                    <div className="bg-[#FFD02F] absolute top-[-5px] right-[-10px]  text-[#050038] text-sm font-bold px-2 py-1 rounded-full">
              Your idea starts here
            </div>
                </div>
                {/* Second child div */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Three grid text paragraphs */}
                    <div>
                        <p className="text-[#050038] text-lg my-2">Free forever</p>
                        <span className="text-[#050038] text-opacity-60 text-sm text-justify	">
                            Our free plan gives you unlimited team <br></br> members, 3 boards, and 300+ expert-<br></br>made templates. Signing up with your <br></br>work email lets you bring in your team <br></br>faster. See our <br></br> <span className="text-[#4262FF]">pricing plans </span>  for more features.
                        </span>
                    </div>
                    <div>
                    <p className="text-[#050038] text-lg my-2">Easy integrations</p>
                        <span className="text-[#050038] text-opacity-60 text-sm text-justify	">
                            Miro has 100+ powerful integrations <br></br> with tools you already use like G <br></br> Suite, Slack, and Jira, so your <br></br> workflow is seamless. View the full <br></br> list in our <span className="text-[#4262FF]">Marketplace</span>.
                        </span>
                    </div>
                    <div>
                    <p className="text-[#050038] text-lg my-2">Security first</p>
                        <span className="text-[#050038] text-opacity-60 text-sm text-justify	" >
                            We treat your data like you would — <br></br>with the utmost care. We follow <br></br> industry-leading security standards <br></br> and give you tools to protect<br></br> intellectual property. Learn more <br></br> at our <span className="text-[#4262FF]">Trust Center</span>.
                        </span>
                    </div>
                </div>

                <div className="text-center mt-12">
                    {/* Sign up free button */}
                    <FreeSignUpSmall />
                </div>
            </div>
        </>
    );
};

export default Collaboration;
